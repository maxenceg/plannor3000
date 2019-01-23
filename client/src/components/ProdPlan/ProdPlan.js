// @flow
import React from 'react';
import PlanColumn from '../PlanColumn';
import styles from './ProdPlan.style';

export default class ProdPlan extends React.Component {
  render() {
    const dayStartTime = { hour: 9, minute: 30 };
    const dayEndTime = { hour: 18, minute: 0 };
    return (
      <div style={{ ...this.props.style, ...styles.container }}>
        <PlanColumn dayStartTime={dayStartTime} dayEndTime={dayEndTime} />
        <PlanColumn dayStartTime={dayStartTime} dayEndTime={dayEndTime} />
        <PlanColumn dayStartTime={dayStartTime} dayEndTime={dayEndTime} />
      </div>
    );
  }
}
