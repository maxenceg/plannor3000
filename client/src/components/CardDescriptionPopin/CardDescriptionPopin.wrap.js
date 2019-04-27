import CardDescriptionPopin from './CardDescriptionPopin';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleCardDescriptionPopin } from 'redux/App/actions';
import { getCardDescriptionPopinCard, isCardDescriptionPopinOpen } from 'redux/App/selectors';

const mapStateToProps = state => ({
  card: getCardDescriptionPopinCard(state),
  isCardDescriptionPopinOpen: isCardDescriptionPopinOpen(state),
});

const mapDispatchToProps = {
  toggleCardDescriptionPopin,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(CardDescriptionPopin));
