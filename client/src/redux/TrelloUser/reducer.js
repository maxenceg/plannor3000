import { constants } from './actions';

export const initialState = {
  user: {
    fullName: null,
    username: null,
    boards: [],
    selectedBoard: '',
    columns: [],
    dailyGoalsColumn: {
      id: '',
      cards: [],
    },
    sprintColumn: {
      id: '',
      cards: [],
    },
    boardMembers: [],
  },
  project: {
    devTeam: [],
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
    case constants.FETCH_TRELLO_USER_COLUMNS.SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          columns: action.payload.columns,
        },
      };
    case constants.ADD_TRELLO_USER_DAILY_GOALS_COLUMN:
      return {
        ...state,
        user: {
          ...state.user,
          dailyGoalsColumn: { ...state.user.dailyGoalsColumn, id: action.payload.column },
        },
      };
    case constants.ADD_TRELLO_USER_SPRINT_COLUMN:
      return {
        ...state,
        user: {
          ...state.user,
          sprintColumn: { ...state.user.sprintColumn, id: action.payload.column },
        },
      };
    case constants.FETCH_TRELLO_USER_DAILY_GOALS_CARDS.SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          dailyGoalsColumn: {
            ...state.user.dailyGoalsColumn,
            cards: action.payload.cards,
          },
        },
      };
    case constants.FETCH_TRELLO_USER_SPRINT_BACKLOG_CARDS.SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          sprintColumn: {
            ...state.user.sprintColumn,
            cards: action.payload.cards,
          },
        },
      };
    case constants.FETCH_TRELLO_USER_BOARD_MEMBERS.SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          boardMembers: action.payload.members,
          boardMembersOrigin: action.payload.boardOrigin,
        },
      };
    case constants.TOGGLE_TRELLO_TEAM_MEMBERSHIP:
      const memberIndex = state.project.devTeam
        .map(function(member) {
          return member.id;
        })
        .indexOf(action.payload.memberId);
      return {
        ...state,
        project: {
          ...state.project,
          devTeam:
            memberIndex !== -1
              ? state.project.devTeam.filter(member => member.id !== action.payload.memberId)
              : state.project.devTeam.concat({
                  ...state.user.boardMembers.filter(
                    member => member.id === action.payload.memberId,
                  )[0],
                  dailyCards: [],
                }),
        },
        user: {
          ...state.user,
          boardMembers: state.user.boardMembers.map(member => {
            if (member.id === action.payload.memberId) {
              return { ...member, isInTeam: !member.isInTeam };
            }
            return member;
          }),
        },
      };
    default:
      return state;
  }
}
