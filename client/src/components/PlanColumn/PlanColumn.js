// @flow
import React from 'react';
import styles from './PlanColumn.style.js';
import PlanCard from '../PlanCard';
import map from 'lodash/map';

export default class PlanColumn extends React.Component {
  render() {
    const editDevSelection = card => {
      this.props.addDevSelectionCard(card);
      this.props.toggleDevSelectionPopin();
    };

    const cards = this.props.getCardsOfDev(this.props.member.id);

    return (
      <div style={styles.container}>
        <div style={{ ...this.props.style, ...styles.grid }}>
          {map(cards, card => {
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
                icons={[{ name: 'edit', action: () => editDevSelection(card) }]}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
