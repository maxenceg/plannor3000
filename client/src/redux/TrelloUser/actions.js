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
  FETCH_TRELLO_USER_COLUMNS: {
    REQUEST: 'FETCH_TRELLO_USER_COLUMNS_REQUEST',
    SUCCESS: 'FETCH_TRELLO_USER_COLUMNS_SUCCESS',
    ERROR: 'FETCH_TRELLO_USER_COLUMNS_ERROR',
  },
  FETCH_TRELLO_USER_DAILY_GOALS_CARDS: {
    REQUEST: 'FETCH_TRELLO_USER_DAILY_GOALS_CARDS_REQUEST',
    SUCCESS: 'FETCH_TRELLO_USER_DAILY_GOALS_CARDS_SUCCESS',
    ERROR: 'FETCH_TRELLO_USER_DAILY_GOALS_CARDS_ERROR',
  },
  ADD_TRELLO_USER_SELECTED_BOARD: 'ADD_TRELLO_USER_SELECTED_BOARD',
  ADD_TRELLO_USER_DAILY_GOALS_COLUMN: 'ADD_TRELLO_USER_DAILY_GOALS_COLUMN',
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

export function fetchTrelloUserColumnsRequest() {
  return {
    type: constants.FETCH_TRELLO_USER_COLUMNS.REQUEST,
  };
}

export function fetchTrelloUserColumnsSuccess(columns) {
  return {
    type: constants.FETCH_TRELLO_USER_COLUMNS.SUCCESS,
    payload: { columns },
  };
}

export function fetchTrelloUserColumnsError(error) {
  return {
    type: constants.FETCH_TRELLO_USER_COLUMNS.ERROR,
    payload: { errorMessage: error.message },
  };
}

export function addTrelloUserDailyGoalsColumn(column) {
  return {
    type: constants.ADD_TRELLO_USER_DAILY_GOALS_COLUMN,
    payload: { column },
  };
}

export function fetchTrelloUserDailyGoalsCardsRequest() {
  return {
    type: constants.FETCH_TRELLO_USER_DAILY_GOALS_CARDS.REQUEST,
  };
}

export function fetchTrelloUserDailyGoalsCardsSuccess(cards) {
  return {
    type: constants.FETCH_TRELLO_USER_DAILY_GOALS_CARDS.SUCCESS,
    payload: { cards },
  };
}

export function fetchTrelloUserDailyGoalsCardsError(error) {
  return {
    type: constants.FETCH_TRELLO_USER_DAILY_GOALS_CARDS.ERROR,
    payload: { errorMessage: error.message },
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

export const fetchTrelloUserColumns = board => {
  return dispatch => {
    dispatch(fetchTrelloUserColumnsRequest());
    window.Trello.get(
      `boards/` + board + `/lists`,
      { fields: 'name' },
      data => dispatch(fetchTrelloUserColumnsSuccess(data)),
      error => dispatch(fetchTrelloUserColumnsError(error)),
    );
  };
};

export const fetchDailyGoalsCards = column => {
  return dispatch => {
    dispatch(fetchTrelloUserDailyGoalsCardsRequest());
    window.Trello.get(
      `lists/` + column + `/cards`,
      { fields: 'idShort,name' },
      data => dispatch(fetchTrelloUserDailyGoalsCardsSuccess(data)),
      error => dispatch(fetchTrelloUserDailyGoalsCardsError(error)),
    );
  };
};

export default {
  fetchTrelloUserRequest,
  fetchTrelloUserSuccess,
  fetchTrelloUserError,
};
