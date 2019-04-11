import ProdPlan from './ProdPlan';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getTrelloUserDevTeam, getTrelloUserDailyGoalsColumn } from 'redux/TrelloUser';

const mapStateToProps = state => ({
  devTeamMembers: getTrelloUserDevTeam(state),
  dailyGoalsColumn: getTrelloUserDailyGoalsColumn(state),
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ProdPlan));
