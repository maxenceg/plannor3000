import DevSelectionPopin from './DevSelectionPopin';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  getTrelloUserBoardMembers,
  getTrelloUserBoardMembersOrigin,
  getTrelloUserSelectedBoard,
  getTrelloUserDevTeam,
} from 'redux/TrelloUser';
import {
  fetchTrelloUserBoardMembers,
  toggleTrelloUserTeamMembership,
} from 'redux/TrelloUser/actions';
import { toggleEditTeamPopin } from 'redux/App/actions';
import { getDevSelectionCardId } from 'redux/App';

const mapStateToProps = state => ({
  selectedCard: getDevSelectionCardId(state),
  devTeamMembers: getTrelloUserDevTeam(state),
  trelloUserSelectedBoard: getTrelloUserSelectedBoard(state),
  trelloUserBoardMembers: getTrelloUserBoardMembers(state),
  trelloUserBoardMembersOrigin: getTrelloUserBoardMembersOrigin(state),
});

const mapDispatchToProps = {
  fetchTrelloUserBoardMembers,
  toggleEditTeamPopin,
  toggleTrelloUserTeamMembership,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(DevSelectionPopin));
