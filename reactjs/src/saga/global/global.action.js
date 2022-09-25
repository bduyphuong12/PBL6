import * as Types from './global.type';

export const testRequest = (payload) => ({
  type: Types.TEST_TYPE.TEST_REQUEST,
  payload,
});
