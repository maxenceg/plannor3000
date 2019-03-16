import { constants } from './actions';

export const initialState = {
  isEditTeamPopinOpen: false,
  devSelectionPopin: {
    isOpen: false,
    selectedCard: {
      id: null,
    },
    selectedMembers: [],
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.TOGGLE_EDIT_TEAM_POPIN:
      return {
        ...state,
        isEditTeamPopinOpen: !state.isEditTeamPopinOpen,
      };
    case constants.TOGGLE_DEV_SELECTION_POPIN:
      return {
        ...state,
        devSelectionPopin: {
          ...state.devSelectionPopin,
          isOpen: !state.devSelectionPopin.isOpen,
        },
      };
    case constants.ADD_DEV_SELECTION_CARD:
      return {
        ...state,
        devSelectionPopin: {
          ...state.devSelectionPopin,
          selectedCard: {
            ...action.payload.card,
            startTime: { hour: 10, minute: 0 },
            endTime: { hour: 12, minute: 30 },
          },
        },
      };
    case constants.TOGGLE_MEMBER_SELECTION:
      return {
        ...state,
        devSelectionPopin: {
          ...state.devSelectionPopin,
          selectedMembers: state.devSelectionPopin.selectedMembers.includes(action.payload.memberId)
            ? state.devSelectionPopin.selectedMembers.filter(
                memberId => memberId !== action.payload.memberId,
              )
            : [...state.devSelectionPopin.selectedMembers, action.payload.memberId],
        },
      };
    default:
      return state;
  }
}
