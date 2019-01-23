// @flow
import React from 'react';
import styles from './PlanColumn.style.js';
import ColumnHeader from '../ColumnHeader/index.js';
import PlanCard from '../PlanCard';

export default class PlanColumn extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <ColumnHeader style={styles.columnHeader} />
        <div style={{ ...this.props.style, ...styles.grid }}>
          <div style={styles.gridItem}>9h30</div>
          <PlanCard
            dayStartTime={this.props.dayStartTime}
            dayEndTime={this.props.dayEndTime}
            startTime={{ hour: 9, minute: 30 }}
            endTime={{ hour: 10, minute: 45 }}
          />
          <div style={styles.gridItem}>10h30</div>
          <div style={styles.gridItem}>11h30</div>
          <div style={styles.gridItem}>12h30</div>
          <div style={styles.gridItem}>14h</div>
          <div style={styles.gridItem}>15h</div>
          <div style={styles.gridItem}>16h</div>
          <div style={styles.gridItem}>17h</div>
          <div style={styles.gridItem}>18h</div>
        </div>
      </div>
    );
  }
}
