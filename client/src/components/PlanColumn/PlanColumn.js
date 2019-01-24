// @flow
import React from 'react';
import styles from './PlanColumn.style.js';
import ColumnHeader from '../ColumnHeader/index.js';
import PlanCard from '../PlanCard';

export default class PlanColumn extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={{ ...this.props.style, ...styles.grid }}>
          <PlanCard
            dayStartTime={this.props.dayStartTime}
            dayEndTime={this.props.dayEndTime}
            startTime={{ hour: 9, minute: 30 }}
            endTime={{ hour: 15, minute: 0 }}
          />
        </div>
      </div>
    );
  }
}
