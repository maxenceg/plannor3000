export const constants = {
  TOGGLE_EDIT_TEAM_POPIN: 'TOGGLE_EDIT_TEAM_POPIN',
  TOGGLE_DEV_SELECTION_POPIN: 'TOGGLE_DEV_SELECTION_POPIN',
  ADD_DEV_SELECTION_CARD_ID: 'ADD_DEV_SELECTION_CARD_ID',
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

export function addDevSelectionCardId(cardId) {
  return {
    type: constants.ADD_DEV_SELECTION_CARD_ID,
    payload: { cardId },
  };
}

export default {
  toggleEditTeamPopin,
  toggleDevSelectionPopin,
  addDevSelectionCardId,
};
