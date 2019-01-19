// @flow
import React from 'react';
import Menu from '../Menu';
import styles from './Dashboard.style';
import ProdPlan from '../ProdPlan';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div style={styles.dashboard}>
        <Menu style={styles.menu} />
        <ProdPlan style={styles.prodPlan} />
      </div>
    );
  }
}
