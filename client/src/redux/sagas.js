// @flow
import { all } from 'redux-saga/effects'; // eslint-disable-line

import { sagas as avatarSagas } from 'redux/Avatar';
import { sagas as loginSagas } from 'redux/Login';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  // $FlowFixMe
  yield all([loginSagas(), avatarSagas()]);
}
