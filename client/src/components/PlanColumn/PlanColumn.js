// @flow
import React from 'react';
import styles from './PlanColumn.style.js';
import { getCurrentTime, durationInMinutes } from '../../helpers';
import PlanCard from '../PlanCard';

export default class PlanColumn extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={{ ...this.props.style, ...styles.grid }}>
          {this.props.cards.map(card => {
            setTimeout(() => {
              new Notification('JP alert: Ticket #' + card.idShort, {
                body: this.props.member.fullName + ' should finish their ticket in 30 minutes!',
                requireInteraction: true,
              });
            }, (durationInMinutes(getCurrentTime(), card.endTime) - 30) * 60000);
            return (
              <PlanCard
                key={card.id}
                dayStartTime={this.props.dayStartTime}
                dayEndTime={this.props.dayEndTime}
                startTime={card.startTime}
                endTime={card.endTime}
                content={card.name}
                icon={{ name: 'delete' }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
