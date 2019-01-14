// @flow
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR } from './constant';

export function loginUserRequest(payload) {
  const { username, password } = payload;
  return {
    type: USER_LOGIN_REQUEST,
    payload: { username, password },
  };
}

export function loginUserSuccess(token) {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: { token },
  };
}

export function loginUserError(error) {
  return {
    type: USER_LOGIN_ERROR,
    payload: { errorMessage: error.message },
  };
}

export default {
  loginUserRequest,
  loginUserSuccess,
  loginUserError,
};
