// @flow
import React from 'react';
import PlanColumn from '../PlanColumn';
import styles from './ProdPlan.style';

export default class ProdPlan extends React.Component {
  render() {
    return (
      <div style={{ ...this.props.style, ...styles.container }}>
        <PlanColumn />
        <PlanColumn />
        <PlanColumn />
      </div>
    );
  }
}
