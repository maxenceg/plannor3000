import EditTeamPopin from './EditTeamPopin';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getTrelloUserBoardMembers } from 'redux/TrelloUser';
import { fetchTrelloUserBoardMembers } from 'redux/TrelloUser/actions';
import { toggleEditTeamPopin } from 'redux/App/actions';
import { getTrelloUserSelectedBoard } from '../../redux/TrelloUser';

const mapStateToProps = state => ({
  trelloUserSelectedBoard: getTrelloUserSelectedBoard(state),
  trelloUserBoardMembers: getTrelloUserBoardMembers(state),
});

const mapDispatchToProps = {
  fetchTrelloUserBoardMembers,
  toggleEditTeamPopin,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(EditTeamPopin));
