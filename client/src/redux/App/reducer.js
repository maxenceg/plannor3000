import { constants } from './actions';

export const initialState = {
  isEditTeamPopinOpen: false,
  devSelectionPopin: {
    isOpen: false,
    selectedCardId: null,
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
          isOpen: !state.isOpen,
        },
      };
    case constants.ADD_DEV_SELECTION_CARD_ID:
      return {
        ...state,
        devSelectionPopin: {
          ...state.devSelectionPopin,
          selectedCardId: action.payload.cardId,
        },
      };
    default:
      return state;
  }
}
