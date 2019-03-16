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
  FETCH_TRELLO_USER_SPRINT_BACKLOG_CARDS: {
    REQUEST: 'FETCH_TRELLO_USER_SPRINT_BACKLOG_CARDS_REQUEST',
    SUCCESS: 'FETCH_TRELLO_USER_SPRINT_BACKLOG_CARDS_SUCCESS',
    ERROR: 'FETCH_TRELLO_USER_SPRINT_BACKLOG_CARDS_ERROR',
  },
  FETCH_TRELLO_USER_BOARD_MEMBERS: {
    REQUEST: 'FETCH_TRELLO_USER_BOARD_MEMBERS_REQUEST',
    SUCCESS: 'FETCH_TRELLO_USER_BOARD_MEMBERS_SUCCESS',
    ERROR: 'FETCH_TRELLO_USER_BOARD_MEMBERS_ERROR',
  },
  TAG_DEVS_ON_CARD: {
    REQUEST: 'TAG_DEVS_ON_CARD_REQUEST',
    SUCCESS: 'TAG_DEVS_ON_CARD_SUCCESS',
    ERROR: 'TAG_DEVS_ON_CARD_ERROR',
  },
  MOVE_CARD_TO_DAILY_GOALS: {
    REQUEST: 'MOVE_CARD_TO_DAILY_GOALS_REQUEST',
    SUCCESS: 'MOVE_CARD_TO_DAILY_GOALS_SUCCESS',
    ERROR: 'MOVE_CARD_TO_DAILY_GOALS_ERROR',
  },
  ADD_TRELLO_USER_SELECTED_BOARD: 'ADD_TRELLO_USER_SELECTED_BOARD',
  ADD_TRELLO_USER_DAILY_GOALS_COLUMN: 'ADD_TRELLO_USER_DAILY_GOALS_COLUMN',
  ADD_TRELLO_USER_SPRINT_COLUMN: 'ADD_TRELLO_USER_SPRINT_COLUMN',
  TOGGLE_TRELLO_TEAM_MEMBERSHIP: 'TOGGLE_TRELLO_TEAM_MEMBERSHIP',
  ADD_CARD_TO_DEV_DAILY_CARDS: 'ADD_CARD_TO_DEV_DAILY_CARDS',
  REMOVE_CARDS_FROM_SPRINT_BACKLOG: 'REMOVE_CARDS_FROM_SPRINT_BACKLOG',
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

export function addTrelloUserSprintColumn(column) {
  return {
    type: constants.ADD_TRELLO_USER_SPRINT_COLUMN,
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

export function fetchTrelloUserSprintBacklogCardsRequest() {
  return {
    type: constants.FETCH_TRELLO_USER_SPRINT_BACKLOG_CARDS.REQUEST,
  };
}

export function fetchTrelloUserSprintBacklogCardsSuccess(cards) {
  return {
    type: constants.FETCH_TRELLO_USER_SPRINT_BACKLOG_CARDS.SUCCESS,
    payload: { cards },
  };
}

export function fetchTrelloUserSprintBacklogCardsError(error) {
  return {
    type: constants.FETCH_TRELLO_USER_SPRINT_BACKLOG_CARDS.ERROR,
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
      { fields: 'idShort,name,idMembers' },
      data => dispatch(fetchTrelloUserDailyGoalsCardsSuccess(data)),
      error => dispatch(fetchTrelloUserDailyGoalsCardsError(error)),
    );
  };
};

export const fetchSprintBacklogCards = column => {
  return dispatch => {
    dispatch(fetchTrelloUserSprintBacklogCardsRequest());
    window.Trello.get(
      `lists/` + column + `/cards`,
      { fields: 'idShort,name,idMembers' },
      data => dispatch(fetchTrelloUserSprintBacklogCardsSuccess(data)),
      error => dispatch(fetchTrelloUserSprintBacklogCardsError(error)),
    );
  };
};

export function fetchTrelloUserBoardMembersRequest() {
  return {
    type: constants.FETCH_TRELLO_USER_BOARD_MEMBERS.REQUEST,
  };
}

export function fetchTrelloUserBoardMembersSuccess(boardOrigin, members) {
  return {
    type: constants.FETCH_TRELLO_USER_BOARD_MEMBERS.SUCCESS,
    payload: { boardOrigin, members },
  };
}

export function fetchTrelloUserBoardMembersError(error) {
  return {
    type: constants.FETCH_TRELLO_USER_BOARD_MEMBERS.ERROR,
    payload: { errorMessage: error.message },
  };
}

export const fetchTrelloUserBoardMembers = board => {
  return dispatch => {
    dispatch(fetchTrelloUserBoardMembersRequest());
    window.Trello.get(
      `boards/` + board + `/members`,
      { fields: 'avatarHash,fullName,initials' },
      data => dispatch(fetchTrelloUserBoardMembersSuccess(board, data)),
      error => dispatch(fetchTrelloUserBoardMembersError(error)),
    );
  };
};

export function toggleTrelloUserTeamMembership(memberId) {
  return {
    type: constants.TOGGLE_TRELLO_TEAM_MEMBERSHIP,
    payload: { memberId },
  };
}

export function tagDevsOnCardRequest() {
  return {
    type: constants.TAG_DEVS_ON_CARD.REQUEST,
  };
}

export function tagDevsOnCardSuccess() {
  return {
    type: constants.TAG_DEVS_ON_CARD.SUCCESS,
  };
}

export function tagDevsOnCardError(error) {
  return {
    type: constants.TAG_DEVS_ON_CARD.ERROR,
    payload: { errorMessage: error.message },
  };
}

export function addCardToDevDailyCards(devId, card) {
  return {
    type: constants.ADD_CARD_TO_DEV_DAILY_CARDS,
    payload: { devId, card },
  };
}

export function tagDevsOnCard(card, membersId) {
  return dispatch => {
    dispatch(tagDevsOnCardRequest());
    membersId.forEach(memberId => {
      if (window.Trello.post(`cards/` + card.id + '/idMembers', { value: memberId })) {
        dispatch(addCardToDevDailyCards(memberId, card));
      }
    });
  };
}

export function moveCardToDailyGoalsRequest() {
  return {
    type: constants.MOVE_CARD_TO_DAILY_GOALS.REQUEST,
  };
}

export function moveCardToDailyGoals(card, dailyGoalsColumnId) {
  return dispatch => {
    dispatch(moveCardToDailyGoalsRequest());
    window.Trello.put(`cards/` + card.id + '/idList', { value: dailyGoalsColumnId });
  };
}

export function removeCardFromSprintBacklog(cardId) {
  return {
    type: constants.REMOVE_CARDS_FROM_SPRINT_BACKLOG,
    payload: { cardId },
  };
}

export default {
  fetchTrelloUserRequest,
  fetchTrelloUserSuccess,
  fetchTrelloUserError,
};
