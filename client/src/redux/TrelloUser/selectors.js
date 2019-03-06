export const getTrelloUserFullName = state => state.trelloUserState.user.fullName;
export const getTrelloUserBoards = state => state.trelloUserState.user.boards;
export const getTrelloUserSelectedBoard = state => state.trelloUserState.user.selectedBoard;
export const getTrelloUserColumns = state => state.trelloUserState.user.columns;
export const getTrelloUserDailyGoalsColumn = state =>
  state.trelloUserState.user.dailyGoalsColumn.id;
export const getTrelloUserDailyGoalsCards = state =>
  state.trelloUserState.user.dailyGoalsColumn.cards;
export const getTrelloUserSprintColumn = state => state.trelloUserState.user.sprintColumn.id;
export const getTrelloUserSprintBacklogCards = state =>
  state.trelloUserState.user.sprintColumn.cards;
export const getTrelloUserBoardMembers = state => state.trelloUserState.user.boardMembers;
export const getTrelloUserBoardMembersOrigin = state =>
  state.trelloUserState.user.boardMembersOrigin;
export const getTrelloUserDevTeam = state => state.trelloUserState.project.devTeam;
export const getTrelloUserDGCardsRelatedToMember = (state, memberId) =>
  state.trelloUserState.user.dailyGoalsColumn.cards.filter(card =>
    card.idMembers.includes(memberId),
  );
