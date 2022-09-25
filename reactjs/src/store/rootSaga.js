import { all } from 'redux-saga/effects';
import { globalSaga } from '../saga/global/global.saga';

export default function* rootSaga() {
  yield all([globalSaga()]);
}
