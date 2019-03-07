// @flow
import React from 'react';
import PlannorPopin from '../PlannorPopin';
import styles from './DevSelectionPopin.style';
import BasicButton from '../BasicButton';

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
    const content = (
      <div>
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
                  src={'https://trello-avatars.s3.amazonaws.com/' + member.avatarHash + '/50.png'}
                />
              ) : (
                <div style={styles.undefinedAvatar}>{member.initials}</div>
              )}
            </div>
          ))}
          {members.length === 0 && (
            <div style={styles.warningMessage}>
              Vous devez d'abord ajouter des membres à l'équipe
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
