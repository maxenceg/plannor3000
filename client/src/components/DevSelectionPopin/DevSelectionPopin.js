// @flow
import React from 'react';
import PlannorPopin from '../PlannorPopin';
import styles from './DevSelectionPopin.style';
import BasicButton from '../BasicButton';
import TextField from '@material-ui/core/TextField';
import { splitTimeFromString, stringTimeFromObject } from '../../helpers/TimeHelpers/timeHelpers';

export default class DevSelectionPopin extends React.Component {
  componentDidMount() {
    if (
      this.props.trelloUserBoardMembers.length === 0 ||
      this.props.trelloUserBoardMembersOrigin !== this.props.trelloUserSelectedBoard
    ) {
      this.props.fetchTrelloUserBoardMembers(this.props.trelloUserSelectedBoard);
    }
  }
  render() {
    const members = this.props.devTeamMembers;

    const validateAction = () => {
      this.props.toggleDevSelectionPopin();
      this.props.tagDevsOnCard(this.props.selectedCard, this.props.selectedMembers);
      if (this.props.selectedMembers.length > 0) {
        this.props.moveCardToDailyGoals(this.props.selectedCard, this.props.dailyGoalsColumn);
      }
    };
    const onChangeStartTime = event => {
      this.props.selectedCard.startTime = splitTimeFromString(event.target.value);
    };
    const onChangeEndTime = event => {
      this.props.selectedCard.endTime = splitTimeFromString(event.target.value);
    };
    const startTimeString = stringTimeFromObject(this.props.selectedCard.startTime);
    const endTimeString = stringTimeFromObject(this.props.selectedCard.endTime);

    const content = (
      <div>
        <div>
          {this.props.dailyGoalsColumn && (
            <div>
              {members.map(member => (
                <div
                  onClick={this.props.toggleMemberSelection.bind(this, member.id)}
                  key={member.id}
                  style={
                    this.props.selectedMembers.includes(member.id)
                      ? { ...styles.avatarContainer, ...styles.avatarInTeam }
                      : styles.avatarContainer
                  }
                  title={member.fullName}
                >
                  {member.avatarHash ? (
                    <img
                      style={styles.avatar}
                      alt={member.fullName}
                      src={
                        'https://trello-avatars.s3.amazonaws.com/' + member.avatarHash + '/50.png'
                      }
                    />
                  ) : (
                    <div style={styles.undefinedAvatar}>{member.initials}</div>
                  )}
                </div>
              ))}
              <br />
              <TextField
                id="start"
                label="Début"
                type="time"
                defaultValue={startTimeString}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 900, // 15 min
                }}
                onChange={onChangeStartTime}
              />
              &nbsp;
              <TextField
                id="end"
                label="Fin"
                type="time"
                defaultValue={endTimeString}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 900, // 15 min
                }}
                onChange={onChangeEndTime}
              />
            </div>
          )}
          {members.length === 0 && (
            <div style={styles.warningMessage}>
              Vous devez d'abord ajouter des membres à l'équipe
            </div>
          )}
          {!this.props.dailyGoalsColumn && (
            <div style={styles.warningMessage}>
              Vous devez d'abord sélectionner une colonne Daily Goals
            </div>
          )}
        </div>
        <div style={styles.editTeamPopinFooter}>
          <BasicButton label="Valider" onClickAction={validateAction} />
        </div>
      </div>
    );
    return <PlannorPopin style={styles.editTeamPopin} content={content} />;
  }
}
