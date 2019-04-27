// @flow
import React from 'react';
import './ColumnHeader.scss'

export default class ColumnHeader extends React.Component {
  render() {
    return (
      <div className="column-header__container">
        <div className="column-header__avatar" title={this.props.member.fullName}>
          {this.props.member.avatarHash ? (
            <img
              alt={this.props.member.fullName}
              src={
                'https://trello-avatars.s3.amazonaws.com/' +
                this.props.member.avatarHash +
                '/50.png'
              }
            />
          ) : (
            <div className="column-header__avatar--undefined">
              {this.props.member.initials}
            </div>
          )}
        </div>
        <div className="column-header__title">
          {this.props.member.fullName}
        </div>
      </div>
    );
  }
}
