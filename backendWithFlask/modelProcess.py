import cv2 as cv
import skimage.transform
import Labels
from werkzeug.utils import secure_filename
import os
def readAndProcessImg(path):
    img = cv.imread(path,0)
    img = skimage.transform.resize(img, (48, 48))
    for i in range(48):
        for j in range(48):
            if img[i,j] >= 0.9:
                img[i,j] = 0
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