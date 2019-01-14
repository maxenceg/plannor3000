// @flow
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { Content, Container } from './Avatar.style';

// type Props = {
//   fetchUser: (username: string) => void,
//   intl: IntlShape,
//   push: (pathName: string) => Dispatch<*>,
//   updateUsername: (value: string) => void,
//   userAvatarUrl: string,
//   username: string,
// };

class Avatar extends React.Component {
  onInputChange = event => {
    const { updateUsername } = this.props;
    updateUsername(event.target.value);
  };

  fetchUser = () => {
    const { fetchUser, username } = this.props;
    fetchUser(username);
  };

  navigateTo = path => () => {
    const { push } = this.props;
    push(path);
  };

  render() {
    const { intl, userAvatarUrl } = this.props;
    const { formatMessage } = intl;

    return (
      <Container>
        <Content>
          <Button tabIndex={0} onClick={this.navigateTo('/')} variant="contained" color="primary">
            <FormattedMessage id="page.back" />
          </Button>
          <Typography variant="body1">
            <FormattedMessage id="page.api-to-translate-example" />
          </Typography>
          <br />
          <TextField
            fullWidth
            id="github-avatar-input"
            label={formatMessage({ id: 'page.add-github-username' })}
            type="text"
            margin="normal"
            onChange={this.onInputChange}
          />
          <br />
          <Button onClick={this.fetchUser} variant="contained" color="primary">
            <FormattedMessage id="page.fetch-github-avatar" />
          </Button>
          {userAvatarUrl && <img src={userAvatarUrl} alt="user avatar" />}
        </Content>
      </Container>
    );
  }
}

export default Avatar;
