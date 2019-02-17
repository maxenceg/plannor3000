// @flow
import React from 'react';
import PlannorPopin from '../PlannorPopin';
import styles from './EditTeamPopin.style';
import BasicButton from '../BasicButton';

export default class EditTeamPopin extends React.Component {
  componentDidMount() {
    console.log('will mount');
    if (this.props.trelloUserBoardMembers.length === 0) {
      console.log('empty');
      this.props.fetchTrelloUserBoardMembers(this.props.trelloUserSelectedBoard);
    }
  }
  render() {
    const members = this.props.trelloUserBoardMembers;
    const content = (
      <div>
        <div>
          {members.map(member => (
            <div key={member.id} style={styles.avatarContainer} title={member.fullName}>
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
