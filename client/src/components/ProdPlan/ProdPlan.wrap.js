import ProdPlan from './ProdPlan';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  getTrelloUserDevTeam,
  getTrelloUserDGCardsRelatedToMember,
  getTrelloUserDailyGoalsColumn,
} from 'redux/TrelloUser';

const mapStateToProps = state => ({
  devTeamMembers: getTrelloUserDevTeam(state),
  getDailyGoalsCardsRelatedToMember: memberId =>
    getTrelloUserDGCardsRelatedToMember(state, memberId),
  dailyGoalsColumn: getTrelloUserDailyGoalsColumn(state),
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ProdPlan));
