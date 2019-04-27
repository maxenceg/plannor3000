// @flow
import React from 'react';
import PlanColumn from '../PlanColumn';
import ColumnHeader from '../ColumnHeader';
import HourLine from '../HourLine';
import CurrentHourLine from '../CurrentHourLine';
import './ProdPlan.scss'

export default class ProdPlan extends React.Component {
  render() {
    const dayStartTime = { hour: 9, minute: 30 };
    const dayEndTime = { hour: 19, minute: 0 };
    const hoursOfTheDay = [
      { id: 1, hour: 9, minute: 30 },
      { id: 2, hour: 10, minute: 30 },
      { id: 3, hour: 11, minute: 30 },
      { id: 4, hour: 12, minute: 30 },
      { id: 5, hour: 14, minute: 0 },
      { id: 6, hour: 15, minute: 0 },
      { id: 7, hour: 16, minute: 0 },
      { id: 8, hour: 17, minute: 0 },
      { id: 9, hour: 18, minute: 0 },
    ];
    return (
      <div className="prod-plan">
        <div className="prod-plan__header__container">
          <div className="prod-plan__header__columns-container">
            {this.props.devTeamMembers.map(member => (
              <ColumnHeader key={member.id} member={member} />
            ))}
          </div>
        </div>
        <div className="prod-plan__plan__container">
          <CurrentHourLine dayStartTime={dayStartTime} dayEndTime={dayEndTime} />
          {hoursOfTheDay.map(time => (
            <HourLine
              key={time.id}
              time={time}
              dayStartTime={dayStartTime}
              dayEndTime={dayEndTime}
            />
          ))}
          <div className="prod-plan__plan__columns__container">
            {this.props.devTeamMembers.map(member => {
              if (!this.props.dailyGoalsColumn) {
                return (
                  <div key={member.id} className="prod-plan__plan__columns__error__column">
                    <span className="prod-plan__plan__columns__error__label">
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
                  cards={member.dailyCards}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
