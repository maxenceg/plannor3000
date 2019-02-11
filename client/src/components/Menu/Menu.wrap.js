import Menu from './Menu';
import {
  fetchTrelloUserBoards,
  fetchTrelloUser,
  addTrelloUserSelectedBoard,
} from 'redux/TrelloUser/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  getTrelloUserFullName,
  getTrelloUserBoards,
  getTrelloUserSelectedBoard,
} from 'redux/TrelloUser';

const mapStateToProps = state => ({
  trelloUserFullName: getTrelloUserFullName(state),
  trelloUserBoards: getTrelloUserBoards(state),
  trelloUserSelectedBoard: getTrelloUserSelectedBoard(state),
});

const mapDispatchToProps = {
  fetchTrelloUser,
  fetchTrelloUserBoards,
  addTrelloUserSelectedBoard,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Menu));
