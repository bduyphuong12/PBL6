/* eslint-disable react-hooks/rules-of-hooks */

import { testSelector } from '../saga/global/global.selector';
import { useDispatch, useSelector } from 'react-redux';
import { testRequest } from '../saga/global/global.action';

const useGlobalStore = () => {
  const dispatch = useDispatch();
  const check = useSelector(testSelector);
  const test = (payload) => {
    dispatch(testRequest(payload));
  };

  return {
    dispatch,
    test,
    check,
  };
};

export default useGlobalStore;
