const tf = require('@tensorflow/tfjs')
const IMG_SIZE = 48
async function loadModel() {
    console.log("model loading..");
    // clear the model variable
    model = undefined;
    // load the model
    model = await tf.loadModel(".\kanji_models\model.json");
  
    console.log("model loaded..");
}

function preprocessIMG(image) {

	// resize the input image to target size of (1, IMG_SIZE, IMG_SIZE, 3)
	let tensor = tf.fromPixels(image)
	    .resizeNearestNeighbor([IMG_SIZE, IMG_SIZE])
	    .expandDims()
	    .toFloat();

	return tensor.div(255.);
}
function getTopK(predictions, k){
	// Input: predictions is the output dataSync of model.predict() function
	top_k = Array.from(predictions)
		.map(function(p, i){
		    return {
		        probability: p,
		        className: KANJI_CLASSES[i]
		    };
		}).sort(function(a,b){
		    return b.probability - a.probability;
		}).slice(0, TOP_K);

	return top_k
}
async function predict(image) {
    loadModel();
    let tensor = preprocessIMG(image);
    let predictions = await model.predict(tensor).dataSync();
    let top_k = getTopK(predictions, TOP_K)
	return top_k;
}