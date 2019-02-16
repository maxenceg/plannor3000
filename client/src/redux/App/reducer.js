import { constants } from './actions';

export const initialState = {
  isEditTeamPopinOpen: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.TOGGLE_EDIT_TEAM_POPIN:
      return {
        ...state,
        isEditTeamPopinOpen: !state.isEditTeamPopinOpen,
      };
    default:
      return state;
  }
}
