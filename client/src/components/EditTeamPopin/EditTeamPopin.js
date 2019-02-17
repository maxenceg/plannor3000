// @flow
import React from 'react';
import PlannorPopin from '../PlannorPopin';
import styles from './EditTeamPopin.style';
import BasicButton from '../BasicButton';

export default class EditTeamPopin extends React.Component {
  componentDidMount() {
    if (this.props.trelloUserBoardMembers.length === 0) {
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
        <div style={styles.editTeamPopinFooter}>
          <BasicButton label="Valider" onClickAction={this.props.toggleEditTeamPopin} />
        </div>
      </div>
    );
    return <PlannorPopin style={styles.editTeamPopin} content={content} />;
  }
}
