import ProdPlan from './ProdPlan';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getTrelloUserDevTeam } from 'redux/TrelloUser';

const mapStateToProps = state => ({
  devTeamMembers: getTrelloUserDevTeam(state),
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ProdPlan));
