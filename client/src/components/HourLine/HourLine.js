// @flow
import React from 'react';
import { timeInMinutes, durationInMinutes } from '../../helpers';
import styles from './HourLine.style';

export default class HourLine extends React.Component {
  render() {
    const topProp =
      (100 * (timeInMinutes(this.props.time) - timeInMinutes(this.props.dayStartTime))) /
        (durationInMinutes(this.props.dayStartTime, this.props.dayEndTime) + 10) +
      '%';
    return (
      <div style={{ ...styles.hourLine, top: topProp }}>
        <div style={styles.hourLabel}>
          {this.props.time.hour}h{this.props.time.minute !== 0 && this.props.time.minute}
        </div>
      </div>
    );
  }
}
