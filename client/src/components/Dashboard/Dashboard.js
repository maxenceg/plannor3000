// @flow
import React from 'react';
import Menu from '../Menu';
import styles from './Dashboard.style';
import EditTeamPopin from '../EditTeamPopin';
import DevSelectionPopin from '../DevSelectionPopin';
import CardDescriptionPopin from '../CardDescriptionPopin';
import ProdPlan from '../ProdPlan';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div style={styles.dashboard}>
        <Menu style={styles.menu} />
        <ProdPlan/>
        {this.props.isEditTeamPopinOpen && <EditTeamPopin />}
        {this.props.isDevSelectionPopinOpen && <DevSelectionPopin />}
        {this.props.isCardDescriptionPopinOpen && <CardDescriptionPopin />}
      </div>
    );
  }
}
