export const constants = {
  TOGGLE_EDIT_TEAM_POPIN: 'TOGGLE_EDIT_TEAM_POPIN',
  TOGGLE_DEV_SELECTION_POPIN: 'TOGGLE_DEV_SELECTION_POPIN',
  ADD_DEV_SELECTION_CARD: 'ADD_DEV_SELECTION_CARD',
  TOGGLE_MEMBER_SELECTION: 'TOGGLE_MEMBER_SELECTION',
};

export function toggleEditTeamPopin() {
  return {
    type: constants.TOGGLE_EDIT_TEAM_POPIN,
  };
}

export function toggleDevSelectionPopin() {
  return {
    type: constants.TOGGLE_DEV_SELECTION_POPIN,
  };
}

export function addDevSelectionCard(card) {
  return {
    type: constants.ADD_DEV_SELECTION_CARD,
    payload: { card },
  };
}

export function toggleMemberSelection(memberId) {
  return {
    type: constants.TOGGLE_MEMBER_SELECTION,
    payload: { memberId },
  };
}

export default {
  toggleEditTeamPopin,
  toggleDevSelectionPopin,
  addDevSelectionCard,
};
