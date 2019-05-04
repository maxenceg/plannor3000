import filter from 'lodash/filter';

export const getTrelloUserFullName = state => state.trelloUserState.user.fullName;
export const getTrelloUserBoards = state => state.trelloUserState.user.boards;
export const getTrelloUserSelectedBoard = state => state.trelloUserState.user.selectedBoard;
export const getTrelloUserColumns = state => state.trelloUserState.user.columns;
export const getTrelloUserDailyGoalsColumn = state =>
  state.trelloUserState.user.dailyGoalsColumn.id;
export const getTrelloUserDailyGoalsCards = state =>
  state.trelloUserState.user.dailyGoalsColumn.cards;
export const getTrelloUserSprintColumn = state => state.trelloUserState.user.sprintColumn.id;
export const getTrelloUserToValidateColumn = state =>
  state.trelloUserState.user.toValidateColumn.id;
export const getTrelloUserSprintBacklogCards = state =>
  state.trelloUserState.user.sprintColumn.cards.filter(card => card.devs.length === 0);
export const getCardChecklists = (state, cardId) =>
  filter(state.trelloUserState.user.cards, card => {
    if (card.id === cardId) {
      return card.checklists;
    }
  });
export const getFlowColumns = state => {
  const dailyGoalsColumn = getTrelloUserDailyGoalsColumn(state);
  const toValidateColumn = getTrelloUserToValidateColumn(state);
  if (dailyGoalsColumn && toValidateColumn) {
    const flowColumns = [...state.trelloUserState.user.columns];
    const firstIndex =
      state.trelloUserState.user.columns.findIndex(column => column.id === dailyGoalsColumn) - 1;
    const lastIndex = state.trelloUserState.user.columns.findIndex(
      column => column.id === toValidateColumn,
    );
    return flowColumns.splice(firstIndex, lastIndex - firstIndex);
  }
  return [];
};
export const getCardsFromColumn = (state, columnId) =>
  filter(state.trelloUserState.user.cards, card => card.column === columnId);
export const getTrelloUserBoardMembers = state => state.trelloUserState.user.boardMembers;
export const getTrelloUserBoardMembersOrigin = state =>
  state.trelloUserState.user.boardMembersOrigin;
export const getTrelloUserDevTeam = state => state.trelloUserState.project.devTeam;
export const getCardsOfDev = (state, devId) =>
  filter(state.trelloUserState.user.cards, card => card.devs.includes(devId));
