export const isEditTeamPopinOpen = state => state.appState.isEditTeamPopinOpen;
export const isDevSelectionPopinOpen = state => state.appState.devSelectionPopin.isOpen;
export const getDevSelectionCardId = state => state.appState.devSelectionPopin.selectedCard.id;
export const getDevSelectionCard = state =>
  state.trelloUserState.user.sprintColumn.cards.filter(
    card => card.id === state.appState.devSelectionPopin.selectedCard.id,
  )[0];
export const isCardDescriptionPopinOpen = state => state.appState.cardDescriptionPopin.isOpen;
export const getCardDescriptionPopinCard = state => state.appState.cardDescriptionPopin.card;
export const getSelectedMembers = state => state.appState.devSelectionPopin.selectedMembers;
