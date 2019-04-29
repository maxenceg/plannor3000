// @flow
import React from 'react';
import { timeInMinutes, durationInMinutes, getCurrentTime } from '../../helpers';
import styles from './PlanCard.style';

export default class PlanCard extends React.Component {
  componentWillMount() {
    this.props.devName &&
      setTimeout(() => {
        new Notification('JP alert: Ticket #' + this.props.card.idShort, {
          body: this.props.devName + ' should finish their ticket in 30 minutes!',
          requireInteraction: true,
        });
      }, (durationInMinutes(getCurrentTime(), this.props.card.endTime) - 30) * 60000);
  }
  render() {
    const handleClick = event => {
      event.stopPropagation();
      this.props.icon.action();
    };

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
      <div
        style={{ ...this.props.style, ...styles.cardContainer, ...timedCardContainerStyle }}
        onClick={this.props.cardAction}
      >
        <div style={styles.header}>
          <div style={styles.idShort}>#{this.props.card.idShort}</div>
          <div style={styles.labelsContainer}>
            {this.props.card.labels.map(label => (
              <div style={{ backgroundColor: label.color, ...styles.label }} key={label.name}>
                {label.name}
              </div>
            ))}
          </div>
        </div>
        <div style={styles.cardName}>{this.props.card.name}</div>
        <div style={styles.footerIcon}>
          <i style={styles.icon} className="material-icons" onClick={handleClick}>
            {this.props.icon.name}
          </i>
        </div>
      </div>
    );
  }
}
