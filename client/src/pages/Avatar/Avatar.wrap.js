// @flow
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

import { actions } from 'redux/Avatar';
import Avatar from './Avatar';

const mapStateToProps = state => ({
  username: state.avatar.username,
  userAvatarUrl: state.avatar.userAvatarUrl,
});

const mapDispatchToProps = dispatch => ({
  fetchUser: username => dispatch(actions.fetchUserRequest(username)),
  push: pathName => dispatch(push(pathName)),
  updateUsername: username => dispatch(actions.updateUsername(username)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(injectIntl(Avatar));
