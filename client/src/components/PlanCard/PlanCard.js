// @flow
import React from 'react';
import { timeInMinutes, durationInMinutes } from '../../helpers';
import styles from './PlanCard.style';

export default class PlanCard extends React.Component {
  render() {
    const topProp =
      this.props.startTime && this.props.dayStartTime && this.props.dayEndTime
        ? (100 * (timeInMinutes(this.props.startTime) - timeInMinutes(this.props.dayStartTime))) /
            durationInMinutes(this.props.dayStartTime, this.props.dayEndTime) +
          '%'
        : null;
    const heightProp =
      this.props.startTime && this.props.endTime && this.props.dayStartTime && this.props.dayEndTime
        ? (100 * (timeInMinutes(this.props.endTime) - timeInMinutes(this.props.startTime))) /
            durationInMinutes(this.props.dayStartTime, this.props.dayEndTime) +
          '%'
        : null;
    const timedCardContainerStyle =
      topProp && heightProp ? { top: topProp, height: heightProp, position: 'absolute' } : null;
    return (
      <div style={{ ...this.props.style, ...styles.cardContainer, ...timedCardContainerStyle }}>
        {this.props.content}
        <div style={styles.footerIcon}>
          <i className="material-icons" onClick={this.props.icon.action}>
            {this.props.icon.name}
          </i>
        </div>
      </div>
    );
  }
}
