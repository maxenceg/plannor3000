// @flow
import React from 'react';
import BasicButton from '../BasicButton';

export default class Menu extends React.Component {
  render() {
    const connectToTrello = () => {
      var authenticationSuccess = function() {
        console.log('Successful authentication');
      };

      var authenticationFailure = function() {
        console.log('Failed authentication');
      };
      window.Trello.authorize({
        type: 'popup',
        name: 'Plannor 3000',
        scope: {
          read: 'true',
          write: 'true',
        },
        expiration: 'never',
        success: authenticationSuccess,
        error: authenticationFailure,
      });
    };
    return (
      <div style={this.props.style}>
        <BasicButton label="Se connecter avec Trello" onClickAction={connectToTrello} />
      </div>
    );
  }
}
