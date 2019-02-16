// @flow
import React from 'react';
import BasicButton from '../BasicButton';
import styles from './ButtonsPanel.style';

export default class ButtonsPanel extends React.Component {
  render() {
    return (
      <div style={this.props.style}>
        <BasicButton
          style={{ ...styles.panelButton, ...styles.settingsButton }}
          label={<i className="material-icons">settings</i>}
        />
        <BasicButton
          style={{ ...styles.panelButton, ...styles.editTeamButton }}
          label={<i className="material-icons">people</i>}
          onClickAction={this.props.editTeamAction}
        />
        <BasicButton
          style={{ ...styles.panelButton, ...styles.refreshButton }}
          label={<i className="material-icons">refresh</i>}
          onClickAction={this.props.refreshAction}
        />
      </div>
    );
  }
}
