import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { isEditTeamPopinOpen } from 'redux/App';

const mapStateToProps = state => ({
  isEditTeamPopinOpen: isEditTeamPopinOpen(state),
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Dashboard));
