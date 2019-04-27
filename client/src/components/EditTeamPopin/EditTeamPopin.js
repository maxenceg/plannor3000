// @flow
import React from 'react';
import PlannorPopin from '../PlannorPopin';
import styles from './EditTeamPopin.style';

export default class EditTeamPopin extends React.Component {
  componentDidMount() {
    if (
      this.props.trelloUserBoardMembers.length === 0 ||
      this.props.trelloUserBoardMembersOrigin !== this.props.trelloUserSelectedBoard
    ) {
      this.props.fetchTrelloUserBoardMembers(this.props.trelloUserSelectedBoard);
    }
  }
  render() {
    const members = this.props.trelloUserBoardMembers;
    const toggleMembership = (memberId, event) =>
      this.props.toggleTrelloUserTeamMembership(memberId);
    const content = (
      <div>
        <div>
          {members.map(member => (
            <div
              onClick={toggleMembership.bind(this, member.id)}
              key={member.id}
              style={
                member.isInTeam
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
        </div>
      </div>
    );
    return (
      <PlannorPopin
        isOpen={this.props.isEditTeamPopinOpen}
        handleClose={this.props.toggleEditTeamPopin}
        closeLabel="Valider"
        title="Ajouter des devs à l'équipe"
        content={content}
      />
    );
  }
}
