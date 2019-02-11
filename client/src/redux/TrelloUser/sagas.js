// @flow
import { call, put, takeEvery } from 'redux-saga/effects';
import { makeGetRequest } from 'services/networking/request';
import { fetchTrelloUserSuccess, fetchTrelloUserError } from './actions';
import { FETCH_TRELLO_USER_REQUEST } from './constant';

// worker Saga: will be fired on USER_FETCH_REQUEST actions
export function* fetchTrelloUser(action) {
  const endpoint = `/1/members/me`;
  try {
    const response = yield call(makeGetRequest, endpoint);
    yield put(fetchTrelloUserSuccess(response.body));
  } catch (error) {
    yield put(fetchTrelloUserError(error));
  }
}

/*
  Behavior similar to redux-thunk
  Starts fetchUser on each dispatched `USER_FETCH_REQUEST` action.
  Allows concurrent fetches of user.
*/
export default function* fetchTrelloUserSaga() {
  yield takeEvery(FETCH_TRELLO_USER_REQUEST, fetchTrelloUser);
}
