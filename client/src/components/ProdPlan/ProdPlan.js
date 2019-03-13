// @flow
import React from 'react';
import PlanColumn from '../PlanColumn';
import ColumnHeader from '../ColumnHeader';
import HourLine from '../HourLine';
import styles from './ProdPlan.style';

export default class ProdPlan extends React.Component {
  render() {
    const dayStartTime = { hour: 9, minute: 30 };
    const dayEndTime = { hour: 18, minute: 0 };
    const hoursOfTheDay = [
      { id: 1, hour: 9, minute: 30 },
      { id: 2, hour: 10, minute: 30 },
      { id: 3, hour: 11, minute: 30 },
      { id: 4, hour: 12, minute: 30 },
      { id: 5, hour: 14, minute: 0 },
      { id: 6, hour: 15, minute: 0 },
      { id: 7, hour: 16, minute: 0 },
      { id: 8, hour: 17, minute: 0 },
    ];
    const cards1 = [
      { id: 1, startTime: { hour: 9, minute: 30 }, endTime: { hour: 11, minute: 0 } },
      { id: 2, startTime: { hour: 11, minute: 15 }, endTime: { hour: 15, minute: 0 } },
      { id: 3, startTime: { hour: 15, minute: 15 }, endTime: { hour: 18, minute: 0 } },
    ];
    const cards2 = [
      { id: 1, startTime: { hour: 9, minute: 30 }, endTime: { hour: 12, minute: 15 } },
      { id: 2, startTime: { hour: 14, minute: 0 }, endTime: { hour: 17, minute: 0 } },
    ];
    const cards3 = [
      { id: 1, startTime: { hour: 9, minute: 45 }, endTime: { hour: 11, minute: 45 } },
      { id: 2, startTime: { hour: 12, minute: 0 }, endTime: { hour: 15, minute: 30 } },
      { id: 3, startTime: { hour: 16, minute: 15 }, endTime: { hour: 18, minute: 0 } },
    ];
    return (
      <div style={{ ...this.props.style, ...styles.container }}>
        <div style={styles.headerContainer}>
          <div style={styles.columnHeadersContainer}>
            {this.props.devTeamMembers.map(member => (
              <ColumnHeader key={member.id} style={styles.columnHeader} member={member} />
            ))}
          </div>
        </div>
        <div style={styles.planContainer}>
          {hoursOfTheDay.map(time => (
            <HourLine
              key={time.id}
              time={time}
              dayStartTime={dayStartTime}
              dayEndTime={dayEndTime}
            />
          ))}
          <div style={styles.columnsContainer}>
            {this.props.devTeamMembers.map(member => {
              if (!this.props.dailyGoalsColumn) {
                return (
                  <div key={member.id} style={styles.errorDiv}>
                    <span style={styles.errorLabel}>
                      Vous n'avez pas sélectionné de colonne 'Daily Goals'
                    </span>
                  </div>
                );
              }
              return (
                <PlanColumn
                  key={member.id}
                  dayStartTime={dayStartTime}
                  dayEndTime={dayEndTime}
                  member={member}
                  cards={this.props.getDailyGoalsCardsRelatedToMember(member)}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
