import cv2 as cv
import skimage.transform
import Labels
from werkzeug.utils import secure_filename
import os
import base64
def readAndProcessImg(path):
    img = cv.imread(path)
    img = cv.cvtColor(img,cv.COLOR_BGR2GRAY)
    img = skimage.transform.resize(img, (48, 48))
    # for i in range(48):
    #     for j in range(48):
    #         if img[i,j] >= 0.9:
    #             img[i,j] = 0
    return img
def sortPredict(result):
    arr_predict = []
    for i in range(879):
        if result[0,i] != 0:
            arr_predict.append([result[0,i],Labels.labels[i]])
    # print(sorted(arr_predict,key=lambda arr_predict: (arr_predict[0])))
    return sorted(arr_predict,key=lambda arr_predict: (arr_predict[0]))
def remove_file(path):
	for f in os.listdir(path):
		os.remove(os.path.join(path,f))
def covertBase64ToImg(strImg):
    imgdata = base64.b64decode(strImg)
    filename = 'upload/requestImg.jpg'  # I assume you have a way of picking unique filenames
    with open(filename, 'wb') as f:
        f.write(imgdata)
