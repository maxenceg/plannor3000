// @flow
import React from 'react';
import { timeInMinutes, durationInMinutes } from '../../helpers';
import styles from './PlanCard.style';

export default class PlanCard extends React.Component {
  render() {
    const topProp =
      (100 * (timeInMinutes(this.props.startTime) - timeInMinutes(this.props.dayStartTime))) /
        durationInMinutes(this.props.dayStartTime, this.props.dayEndTime) +
      '%';
    const heightProp =
      (100 * (timeInMinutes(this.props.endTime) - timeInMinutes(this.props.startTime))) /
        durationInMinutes(this.props.dayStartTime, this.props.dayEndTime) +
      '%';
    return (
      <div style={{ ...styles.cardContainer, top: topProp, height: heightProp }}>
        {this.props.duration}
      </div>
    );
  }
}
