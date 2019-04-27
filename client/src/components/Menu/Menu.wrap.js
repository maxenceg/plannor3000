import Menu from './Menu';
import {
  fetchTrelloUserBoards,
  fetchTrelloUser,
  fetchTrelloUserColumns,
  fetchDailyGoalsCards,
  addTrelloUserSelectedBoard,
  addTrelloUserDailyGoalsColumn,
  addTrelloUserSprintColumn,
  fetchSprintBacklogCards,
} from 'redux/TrelloUser/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  getTrelloUserFullName,
  getTrelloUserBoards,
  getTrelloUserSelectedBoard,
  getTrelloUserColumns,
  getTrelloUserDailyGoalsColumn,
  getTrelloUserDailyGoalsCards,
  getTrelloUserSprintColumn,
  getTrelloUserSprintBacklogCards,
} from 'redux/TrelloUser';
import {
  toggleEditTeamPopin,
  toggleDevSelectionPopin,
  toggleCardDescriptionPopin,
  addDevSelectionCard,
} from 'redux/App/actions';

const mapStateToProps = state => ({
  trelloUserFullName: getTrelloUserFullName(state),
  trelloUserBoards: getTrelloUserBoards(state),
  trelloUserSelectedBoard: getTrelloUserSelectedBoard(state),
  trelloUserColumns: getTrelloUserColumns(state),
  trelloUserDailyGoalsColumn: getTrelloUserDailyGoalsColumn(state),
  trelloUserDailyGoalsCards: getTrelloUserDailyGoalsCards(state),
  trelloUserSprintColumn: getTrelloUserSprintColumn(state),
  trelloUserSprintBacklogCards: getTrelloUserSprintBacklogCards(state),
});

const mapDispatchToProps = {
  fetchTrelloUser,
  fetchTrelloUserBoards,
  fetchTrelloUserColumns,
  fetchDailyGoalsCards,
  addTrelloUserSelectedBoard,
  addTrelloUserDailyGoalsColumn,
  toggleEditTeamPopin,
  toggleDevSelectionPopin,
  toggleCardDescriptionPopin,
  addDevSelectionCard,
  addTrelloUserSprintColumn,
  fetchSprintBacklogCards,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Menu));
