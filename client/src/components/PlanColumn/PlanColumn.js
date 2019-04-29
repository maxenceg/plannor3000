// @flow
import React from 'react';
import styles from './PlanColumn.style.js';
import PlanCard from '../PlanCard';

export default class PlanColumn extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={{ ...this.props.style, ...styles.grid }}>
          {this.props.cards.map(card => {
            return (
              <PlanCard
                key={card.id}
                card={card}
                devName={this.props.member.fullName}
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
