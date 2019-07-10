// @flow
import React from 'react';
import styles from './PlanColumn.style.js';
import PlanCard from '../PlanCard';
import map from 'lodash/map';

export default class PlanColumn extends React.Component {
  render() {
    const editDevSelection = () => {
      this.props.toggleDevSelectionPopin();
    };

    const cards = this.props.getCardsOfDev(this.props.member.id);

    return (
      <div style={styles.container}>
        <div style={{ ...this.props.style, ...styles.grid }}>
          {map(cards, card => {
            let startTime;
            if (!card.checklists) {
              startTime = { hour: 10, minute: 0 };
            } else {
              const timeData = card.checklists
                .find(checklist => checklist.name === 'Plannor 3000')
                .checkItems.find(item => item.name.includes('Start'))
                .name.match(/\d+:\d+/)[0];
              const splitTimeData = timeData.split(':');
              startTime = { hour: parseInt(splitTimeData[0]), minute: parseInt(splitTimeData[1]) };
            }

            let endTime;
            if (!card.checklists) {
              endTime = { hour: 10, minute: 0 };
            } else {
              const timeData = card.checklists
                .find(checklist => checklist.name === 'Plannor 3000')
                .checkItems.find(item => item.name.includes('End'))
                .name.match(/\d+:\d+/)[0];
              const splitTimeData = timeData.split(':');
              endTime = { hour: parseInt(splitTimeData[0]), minute: parseInt(splitTimeData[1]) };
            }

            return (
              <PlanCard
                key={card.id}
                card={card}
                devName={this.props.member.fullName}
                dayStartTime={this.props.dayStartTime}
                dayEndTime={this.props.dayEndTime}
                startTime={startTime}
                endTime={endTime}
                content={cards.name}
                icons={[{ name: 'edit', action: editDevSelection }]}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
