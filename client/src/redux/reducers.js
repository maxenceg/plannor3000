// @flow
/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux';

/**
 * Example of the Avatar module which should export a reducer.
 */

import trelloUserReducer, { initialState as trelloUserState } from './TrelloUser/reducer';

// Combine all reducers you may have here
export default combineReducers({
  trelloUserState: trelloUserReducer,
});

export const initialStates = {
  trelloUserState,
};
