// @flow
import React from 'react';
import BasicButton from '../BasicButton';
import BasicSelect from '../BasicSelect';
import ButtonsPanel from '../ButtonsPanel';
import PlanCard from '../PlanCard';
import styles from './Menu.style';
import BasicCollapsePlannor from '../BasicCollapsePlannor';

export default class Menu extends React.Component {
  componentWillMount() {
    const fetchData = () => {
      this.props.fetchTrelloUser();
      this.props.fetchTrelloUserBoards();
    };

    window.Trello.authorize({
      type: 'popup',
      name: 'Plannor 3000',
      scope: {
        read: 'true',
        write: 'true',
      },
      expiration: 'never',
      success: fetchData,
    });
  }

  render() {
    const fetchData = () => {
      this.props.fetchTrelloUser();
      this.props.fetchTrelloUserBoards();
    };

    const connectToTrello = () => {
      window.Trello.authorize({
        type: 'popup',
        name: 'Plannor 3000',
        scope: {
          read: 'true',
          write: 'true',
        },
        expiration: 'never',
        success: fetchData,
      });
    };
    const boardSelectOptions = this.props.trelloUserBoards
      ? this.props.trelloUserBoards.map(function(board) {
          return { value: board.id, label: board.name };
        })
      : null;
    const columnSelectOptions = this.props.trelloUserColumns
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
    const handleSprintColumnChange = event => {
      this.props.addTrelloUserSprintColumn(event.target.value);
      this.props.fetchCardsFromColumn(event.target.value);
    };
    const handleToValidateColumnChange = event => {
      this.props.addTrelloUserToValidateColumn(event.target.value);
    };
    const refreshAction = () => {
      this.props.trelloUserSelectedBoard &&
        this.props.fetchTrelloUserColumns(this.props.trelloUserSelectedBoard);
      this.props.trelloUserDailyGoalsColumn &&
        this.props.fetchDailyGoalsCards(this.props.trelloUserDailyGoalsColumn);
      this.props.trelloUserSprintColumn &&
        this.props.fetchCardsFromColumn(this.props.trelloUserSprintColumn);
    };
    const editTeamAction = () => {
      this.props.toggleEditTeamPopin();
    };
    const openDevSelectionPopin = card => {
      this.props.toggleDevSelectionPopin();
      this.props.addDevSelectionCard(card);
    };
    const openCardDescriptionPopin = card => {
      this.props.fetchCardChecklists(card.id);
      this.props.toggleCardDescriptionPopin(card);
    };
    return (
      <div style={this.props.style}>
        {!window.Trello.authorized() && (
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
            {this.props.trelloUserSelectedBoard !== '' && (
              <div>
                <BasicSelect
                  propStyle={styles.boardSelect}
                  value={this.props.trelloUserSprintColumn}
                  handleChange={handleSprintColumnChange}
                  label="Sprint Backlog"
                  options={columnSelectOptions}
                />
                <BasicSelect
                  propStyle={styles.boardSelect}
                  value={this.props.trelloUserDailyGoalsColumn}
                  handleChange={handleDailyGoalsChange}
                  label="Daily Goals"
                  options={columnSelectOptions}
                />
                <BasicSelect
                  propStyle={styles.boardSelect}
                  value={this.props.trelloUserToValidateColumn}
                  handleChange={handleToValidateColumnChange}
                  label="À valider"
                  options={columnSelectOptions}
                />
              </div>
            )}
          </div>
        )}
        <div style={styles.cardsContainer}>
          {this.props.flowColumns.map(column => (
            <BasicCollapsePlannor key={column.id} title={column.name} />
          ))}
          {this.props.trelloUserSprintBacklogCards.length > 0 &&
            this.props.trelloUserSprintBacklogCards.map(card => (
              <PlanCard
                style={styles.planCard}
                key={card.id}
                card={card}
                icons={[
                  {
                    name: 'arrow_right_alt',
                    action: () => openDevSelectionPopin(card),
                  },
                ]}
                cardAction={() => openCardDescriptionPopin(card)}
              />
            ))}
        </div>
      </div>
    );
  }
}
