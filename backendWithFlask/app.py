from flask import Flask,request,json,Response
from flask import jsonify
from tensorflow import keras
import numpy as np
from keras.preprocessing.image import ImageDataGenerator
from keras import backend as K
import cv2 as cv
import skimage.transform
import matplotlib.pyplot as plt
import Labels
from werkzeug.utils import secure_filename
import os


app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False
UPLOAD_FOLDER = 'upload/'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
model = keras.models.load_model('kanji.h5')

@app.route("/")
def home():
    return jsonify({'name':'愛'})

@app.route('/model',methods = ["POST","GET"])
def predict():
    if request.method == "POST":
        print("request data", np.asarray(request.files))
        data = request.files['data']
        filename = secure_filename(data.filename)
        data.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    

        img = cv.imread(UPLOAD_FOLDER+filename,0)
        img = skimage.transform.resize(img, (48, 48))
        for i in range(48):
            for j in range(48):
                if img[i,j] >= 0.9:
                    img[i,j] = 0
        print(img)
        demo = model.predict(img.reshape(1,48,48,1))
        arr_predict = []
        for i in range(879):
            if demo[0,i] == 1:
                print(i)
                print(Labels.labels[i])
            if demo[0,i] != 0:
                arr_predict.append([demo[0,i],Labels.labels[i]])
        
    
        print(sorted(arr_predict,key=lambda arr_predict: (arr_predict[0])))
        arr_predict = sorted(arr_predict,key=lambda arr_predict: (arr_predict[0]))

        
        return jsonify({'1':(arr_predict[-1][1]),
                        '2':(arr_predict[-2][1]),
                        '3':(arr_predict[-3][1]),
                        '4':(arr_predict[-4][1])
        })
if __name__ == "__main__":
    app.run(debug=True)