// @flow
import React from 'react';
import BasicButton from '../BasicButton';
import BasicSelect from '../BasicSelect';
import styles from './Menu.style';

export default class Menu extends React.Component {
  render() {
    const connectToTrello = () => {
      window.Trello.authorize({
        type: 'popup',
        name: 'Plannor 3000',
        scope: {
          read: 'true',
          write: 'true',
        },
        expiration: 'never',
      });
      this.props.fetchTrelloUser();
      this.props.fetchTrelloUserBoards();
    };
    const basicSelectOptions = this.props.trelloUserBoards
      ? this.props.trelloUserBoards.map(function(board) {
          return { value: board.id, label: board.name };
        })
      : null;
    return (
      <div style={this.props.style}>
        {!this.props.trelloUserFullName && (
          <BasicButton label="Se connecter avec Trello" onClickAction={connectToTrello} />
        )}
        {this.props.trelloUserBoards && this.props.trelloUserBoards.length > 0 && (
          <BasicSelect
            propStyle={styles.boardSelect}
            value={this.props.trelloUserSelectedBoard}
            handleChange={event => this.props.addTrelloUserSelectedBoard(event.target.value)}
            label="Séléctionnez un board"
            options={basicSelectOptions}
          />
        )}
      </div>
    );
  }
}
