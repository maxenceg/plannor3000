import EditTeamPopin from './EditTeamPopin';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  getTrelloUserBoardMembers,
  getTrelloUserBoardMembersOrigin,
  getTrelloUserSelectedBoard,
} from 'redux/TrelloUser';
import {
  fetchTrelloUserBoardMembers,
  toggleTrelloUserTeamMembership,
} from 'redux/TrelloUser/actions';
import { toggleEditTeamPopin } from 'redux/App/actions';
import { isEditTeamPopinOpen } from 'redux/App';

const mapStateToProps = state => ({
  trelloUserSelectedBoard: getTrelloUserSelectedBoard(state),
  trelloUserBoardMembers: getTrelloUserBoardMembers(state),
  trelloUserBoardMembersOrigin: getTrelloUserBoardMembersOrigin(state),
  isEditTeamPopinOpen: isEditTeamPopinOpen(state),
});

const mapDispatchToProps = {
  fetchTrelloUserBoardMembers,
  toggleEditTeamPopin,
  toggleTrelloUserTeamMembership,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(EditTeamPopin));
