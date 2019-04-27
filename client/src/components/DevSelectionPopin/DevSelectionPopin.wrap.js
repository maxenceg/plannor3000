import DevSelectionPopin from './DevSelectionPopin';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  getTrelloUserBoardMembers,
  getTrelloUserBoardMembersOrigin,
  getTrelloUserSelectedBoard,
  getTrelloUserDevTeam,
  getTrelloUserDailyGoalsColumn,
} from 'redux/TrelloUser';
import {
  fetchTrelloUserBoardMembers,
  toggleTrelloUserTeamMembership,
  tagDevsOnCard,
  moveCardToDailyGoals,
  removeCardFromSprintBacklog,
} from 'redux/TrelloUser/actions';
import { toggleDevSelectionPopin, toggleMemberSelection } from 'redux/App/actions';
import { getDevSelectionCard, getSelectedMembers, isDevSelectionPopinOpen } from 'redux/App';

const mapStateToProps = state => ({
  selectedCard: getDevSelectionCard(state),
  devTeamMembers: getTrelloUserDevTeam(state),
  dailyGoalsColumn: getTrelloUserDailyGoalsColumn(state),
  isDevSelectionPopinOpen: isDevSelectionPopinOpen(state),
  trelloUserSelectedBoard: getTrelloUserSelectedBoard(state),
  trelloUserBoardMembers: getTrelloUserBoardMembers(state),
  trelloUserBoardMembersOrigin: getTrelloUserBoardMembersOrigin(state),
  selectedMembers: getSelectedMembers(state),
});

const mapDispatchToProps = {
  fetchTrelloUserBoardMembers,
  toggleDevSelectionPopin,
  toggleTrelloUserTeamMembership,
  tagDevsOnCard,
  moveCardToDailyGoals,
  toggleMemberSelection,
  removeCardFromSprintBacklog,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(DevSelectionPopin));
