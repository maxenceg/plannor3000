// @flow
import React from 'react';
import BasicButton from '../BasicButton';
import BasicSelect from '../BasicSelect';
import ButtonsPanel from '../ButtonsPanel';
import PlanCard from '../PlanCard';
import styles from './Menu.style';

export default class Menu extends React.Component {
  componentWillMount() {
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
  }

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
    const boardSelectOptions = this.props.trelloUserBoards
      ? this.props.trelloUserBoards.map(function(board) {
          return { value: board.id, label: board.name };
        })
      : null;
    const dailyGoalsSelectOptions = this.props.trelloUserColumns
      ? this.props.trelloUserColumns.map(function(column) {
          return { value: column.id, label: column.name };
        })
      : null;
    const handleBoardChange = event => {
      this.props.addTrelloUserSelectedBoard(event.target.value);
      this.props.fetchTrelloUserColumns(event.target.value);
    };
    const handleDailyGoalsChange = event => {
      this.props.addTrelloUserDailyGoalsColumn(event.target.value);
      this.props.fetchDailyGoalsCards(event.target.value);
    };
    const refreshAction = () => {
      this.props.fetchTrelloUserColumns(this.props.trelloUserSelectedBoard);
      this.props.fetchDailyGoalsCards(this.props.trelloUserDailyGoalsColumn);
    };
    const editTeamAction = () => {
      this.props.toggleEditTeamPopin();
    };
    return (
      <div style={this.props.style}>
        {!this.props.trelloUserFullName && (
          <BasicButton
            style={styles.connectToTrelloButton}
            label="Se connecter avec Trello"
            onClickAction={connectToTrello}
          />
        )}
        {this.props.trelloUserBoards && this.props.trelloUserBoards.length > 0 && (
          <div>
            <ButtonsPanel
              style={styles.buttonsPanel}
              refreshAction={refreshAction}
              isTeamEditable={this.props.trelloUserSelectedBoard.length}
              editTeamAction={editTeamAction}
            />
            <BasicSelect
              propStyle={styles.boardSelect}
              value={this.props.trelloUserSelectedBoard}
              handleChange={handleBoardChange}
              label="Sélectionnez un board"
              options={boardSelectOptions}
            />
          </div>
        )}
        {this.props.trelloUserSelectedBoard !== '' && (
          <BasicSelect
            propStyle={styles.boardSelect}
            value={this.props.trelloUserDailyGoalsColumn}
            handleChange={handleDailyGoalsChange}
            label="Sélectionnez la colonne Daily Goals"
            options={dailyGoalsSelectOptions}
          />
        )}
        <div style={styles.cardsContainer}>
          {this.props.trelloUserDailyGoalsCards.length > 0 &&
            this.props.trelloUserDailyGoalsCards.map(card => (
              <PlanCard
                style={styles.planCard}
                key={card.id}
                content={card.name}
                icon={{ name: 'arrow_right_alt' }}
              />
            ))}
        </div>
      </div>
    );
  }
}
