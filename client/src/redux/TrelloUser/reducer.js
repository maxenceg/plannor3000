import { constants } from './actions';

export const initialState = {
  user: {
    fullName: null,
    username: null,
    boards: [],
    selectedBoard: '',
  },
  error: null,
  isLoading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_TRELLO_USER.REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case constants.FETCH_TRELLO_USER.SUCCESS:
      return {
        ...state,
        user: { ...state.user, ...action.payload.user },
        isLoading: false,
      };
    case constants.FETCH_TRELLO_USER.ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case constants.FETCH_TRELLO_USER_BOARDS.REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case constants.FETCH_TRELLO_USER_BOARDS.SUCCESS:
      return {
        ...state,
        user: { ...state.user, boards: action.payload.boards },
        isLoading: false,
      };
    case constants.FETCH_TRELLO_USER_BOARDS.ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case constants.ADD_TRELLO_USER_SELECTED_BOARD:
      return {
        ...state,
        user: {
          ...state.user,
          selectedBoard: action.payload.board,
        },
      };
    default:
      return state;
  }
}
