import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  isEditTeamPopinOpen,
  isDevSelectionPopinOpen,
  isCardDescriptionPopinOpen,
} from 'redux/App';

const mapStateToProps = state => ({
  isEditTeamPopinOpen: isEditTeamPopinOpen(state),
  isDevSelectionPopinOpen: isDevSelectionPopinOpen(state),
  isCardDescriptionPopinOpen: isCardDescriptionPopinOpen(state),
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Dashboard));
