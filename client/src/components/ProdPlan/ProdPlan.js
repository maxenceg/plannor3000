// @flow
import React from 'react';
import styles from './ProdPlan.style';

export default class ProdPlan extends React.Component {
  render() {
    return (
      <div style={this.props.style}>
        <div style={styles.grid}>
          <div style={styles.gridItem}>Hello</div>
          <div style={styles.gridItem}>Hello</div>
          <div style={styles.gridItem}>Hello</div>
          <div style={styles.gridItem}>Hello</div>
          <div style={styles.gridItem}>Hello</div>
          <div style={styles.gridItem}>Hello</div>
          <div style={styles.gridItem}>Hello</div>
          <div style={styles.gridItem}>Hello</div>
          <div style={styles.gridItem}>Hello</div>
        </div>
      </div>
    );
  }
}
