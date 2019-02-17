// @flow
import React from 'react';
import styles from './PlannorPopin.style';

export default class PlannorPopin extends React.Component {
  render() {
    return (
      <div style={{ ...this.props.style, ...styles.popInContainer }}>{this.props.content}</div>
    );
  }
}
