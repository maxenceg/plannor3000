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
} from 'redux/TrelloUser/actions';
import { toggleEditTeamPopin } from 'redux/App/actions';
import { getDevSelectionCardId } from 'redux/App';

const mapStateToProps = state => ({
  selectedCard: getDevSelectionCardId(state),
  devTeamMembers: getTrelloUserDevTeam(state),
  dailyGoalsColumn: getTrelloUserDailyGoalsColumn(state),
  trelloUserSelectedBoard: getTrelloUserSelectedBoard(state),
  trelloUserBoardMembers: getTrelloUserBoardMembers(state),
  trelloUserBoardMembersOrigin: getTrelloUserBoardMembersOrigin(state),
});

const mapDispatchToProps = {
  fetchTrelloUserBoardMembers,
  toggleEditTeamPopin,
  toggleTrelloUserTeamMembership,
  tagDevsOnCard,
  moveCardToDailyGoals,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(DevSelectionPopin));
