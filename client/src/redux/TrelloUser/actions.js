export const constants = {
  FETCH_TRELLO_USER: {
    REQUEST: 'FETCH_TRELLO_USER_REQUEST',
    SUCCESS: 'FETCH_TRELLO_USER_SUCCESS',
    ERROR: 'FETCH_TRELLO_USER_ERROR',
  },
  FETCH_TRELLO_USER_BOARDS: {
    REQUEST: 'FETCH_TRELLO_USER_BOARDS_REQUEST',
    SUCCESS: 'FETCH_TRELLO_USER_BOARDS_SUCCESS',
    ERROR: 'FETCH_TRELLO_USER_BOARDS_ERROR',
  },
  ADD_TRELLO_USER_SELECTED_BOARD: 'ADD_TRELLO_USER_SELECTED_BOARD',
};

export function fetchTrelloUserRequest() {
  return {
    type: constants.FETCH_TRELLO_USER.REQUEST,
  };
}

export function fetchTrelloUserSuccess(user) {
  return {
    type: constants.FETCH_TRELLO_USER.SUCCESS,
    payload: { user },
  };
}

export function fetchTrelloUserError(error) {
  return {
    type: constants.FETCH_TRELLO_USER.ERROR,
    payload: { errorMessage: error.message },
  };
}

export function fetchTrelloUserBoardsRequest() {
  return {
    type: constants.FETCH_TRELLO_USER_BOARDS.REQUEST,
  };
}

export function fetchTrelloUserBoardsSuccess(boards) {
  return {
    type: constants.FETCH_TRELLO_USER_BOARDS.SUCCESS,
    payload: { boards },
  };
}

export function fetchTrelloUserBoardsError(error) {
  return {
    type: constants.FETCH_TRELLO_USER_BOARDS.ERROR,
    payload: { errorMessage: error.message },
  };
}

export function addTrelloUserSelectedBoard(board) {
  return {
    type: constants.ADD_TRELLO_USER_SELECTED_BOARD,
    payload: { board },
  };
}

export const fetchTrelloUser = () => {
  return dispatch => {
    dispatch(fetchTrelloUserRequest());
    window.Trello.members.get(
      `me`,
      { fields: 'username,fullName' },
      data => dispatch(fetchTrelloUserSuccess(data)),
      error => dispatch(fetchTrelloUserError(error)),
    );
  };
};

export const fetchTrelloUserBoards = () => {
  return dispatch => {
    dispatch(fetchTrelloUserBoardsRequest());
    window.Trello.members.get(
      `me/boards`,
      { fields: 'name,lists=open' },
      data => dispatch(fetchTrelloUserBoardsSuccess(data)),
      error => dispatch(fetchTrelloUserBoardsError(error)),
    );
  };
};

export default {
  fetchTrelloUserRequest,
  fetchTrelloUserSuccess,
  fetchTrelloUserError,
};
