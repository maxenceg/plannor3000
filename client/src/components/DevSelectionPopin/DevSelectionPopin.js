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
    let selectedMembers = [];
    const members = this.props.devTeamMembers;
    const toggleMembership = (memberId, event) => {
      const memberIndex = selectedMembers
        .map(function(member) {
          return member.id;
        })
        .indexOf(memberId);
      selectedMembers =
        memberIndex !== -1
          ? selectedMembers.filter(member => member.id !== memberId)
          : selectedMembers.concat(members.filter(member => member.id === memberId));
    };

    const toggleEditTeamPopin = () => {
      this.props.toggleEditTeamPopin();
      this.props.tagDevsOnCard(this.props.selectedCard, selectedMembers);
      this.props.moveCardToDailyGoals(this.props.selectedCard, this.props.dailyGoalsColumn);
    };
    const content = (
      <div>
        <div>
          Carte #{this.props.selectedCard}
          {members.map(member => (
            <div
              onClick={toggleMembership.bind(this, member.id)}
              key={member.id}
              style={styles.avatarContainer}
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
          <BasicButton label="Valider" onClickAction={toggleEditTeamPopin} />
        </div>
      </div>
    );
    return <PlannorPopin style={styles.editTeamPopin} content={content} />;
  }
}
