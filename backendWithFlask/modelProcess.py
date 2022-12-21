import cv2 as cv
import skimage.transform
import Labels
from werkzeug.utils import secure_filename
import os
import base64
import imutils

import numpy as np

def processImg(image):
    gray = cv.cvtColor(image, cv.COLOR_BGR2GRAY)
    gray = abs(255-gray)
    ret,thresh1 = cv.threshold(gray ,127,255,cv.THRESH_BINARY_INV)
    dilated = cv.dilate(thresh1, None, iterations=20)

    cnts = cv.findContours(dilated, cv.RETR_EXTERNAL,cv.CHAIN_APPROX_SIMPLE)
    #cnts = cv.findContours(thresh1, cv.RETR_EXTERNAL,cv.CHAIN_APPROX_SIMPLE)
    cnts = imutils.grab_contours(cnts)
    # cnts = sort_contours(cnts, method="left-to-right")[0]

    for c in cnts:
            
        if cv.contourArea(c) > 10:
            (x, y, w, h) = cv.boundingRect(c)
            cv.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), 2)
        roi = gray[y:y + h, x:x + w]
        thresh = cv.threshold(roi, 0, 255,cv.THRESH_BINARY_INV | cv.THRESH_OTSU)[1]
        kernel = np.ones((1, 2), np.uint8)
        thresh = cv.dilate(thresh, kernel, iterations=1)
        PAD = round(thresh.shape[0]*5/48)
        thresh = cv.copyMakeBorder(thresh, 2*PAD,round(PAD/2),PAD, PAD, cv.BORDER_CONSTANT, None, value = 0)
        thresh = cv.resize(thresh, (48, 48), interpolation = cv.INTER_CUBIC)
        return thresh
def readAndNOTProcessImg(path):
    img = cv.imread(path)
    gray = cv.cvtColor(img, cv.COLOR_BGR2GRAY)
    img = skimage.transform.resize(gray, (48, 48))
    return img
def readAndProcessImg(path):
    img = cv.imread(path)
    img = processImg(img)
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
def gettop10(arr_predict):
    js = []
    for i in range(1,15):
        js.append(arr_predict[-i][1])
    js = list(dict.fromkeys(js))
    return js

# img = readAndProcessImg('E:/PBL6/backendWithFlask/imgTest/requestImg.png')

# print(img)