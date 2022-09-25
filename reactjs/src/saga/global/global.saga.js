/* eslint-disable require-yield */
import { takeEvery } from 'redux-saga/effects';
import * as Types from './global.type';

export function* testSaga({ payload }) {
  try {
    console.log('call saga', payload);
  } catch (error) {
    console.log('error');
  }
}

export function* globalSaga() {
  yield takeEvery(Types.TEST_TYPE.TEST_REQUEST, testSaga);
}
