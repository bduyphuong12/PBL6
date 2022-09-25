import * as Types from './global.type';
const initState = {
  test: 'cc',
};

const globalReducer = (state = initState, action) => {
  switch (action.type) {
    case Types.TEST_TYPE.TEST_REQUEST:
      return {
        ...state,
        test: 'loZ ma',
      };
    default:
      return state;
  }
};
export default globalReducer;
