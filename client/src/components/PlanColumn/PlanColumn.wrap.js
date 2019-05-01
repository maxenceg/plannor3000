import PlanColumn from './PlanColumn';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleDevSelectionPopin } from 'redux/App/actions';
import { getCardsOfDev } from 'redux/TrelloUser/selectors';

const mapStateToProps = state => ({
  getCardsOfDev: devId => getCardsOfDev(state, devId),
});

const mapDispatchToProps = {
  toggleDevSelectionPopin,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(PlanColumn));
