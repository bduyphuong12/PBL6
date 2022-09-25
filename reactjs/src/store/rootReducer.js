import { combineReducers } from 'redux';
import globalReducer from '../saga/global/global.reducer';

const rootReducer = () =>
  combineReducers({
    global: globalReducer,
  });

export default rootReducer;
