// @flow
import React from 'react';
import styles from './ColumnHeader.style';

export default class ColumnHeader extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.picture} title={this.props.member.fullName}>
          {this.props.member.avatarHash ? (
            <img
              style={styles.avatar}
              alt={this.props.member.fullName}
              src={
                'https://trello-avatars.s3.amazonaws.com/' +
                this.props.member.avatarHash +
                '/50.png'
              }
            />
          ) : (
            <div style={styles.undefinedAvatar}>{this.props.member.initials}</div>
          )}
        </div>
        <div style={styles.devName}>{this.props.member.fullName}</div>
      </div>
    );
  }
}
