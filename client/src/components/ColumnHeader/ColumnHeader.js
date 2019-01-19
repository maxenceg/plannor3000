// @flow
import React from 'react';
import styles from './ColumnHeader.styles';
import FixturePhoto from './maxence.jpg';

export default class ColumnHeader extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <img style={styles.picture} src={FixturePhoto} alt="Dev" />
        <div style={styles.devName}>Hubert Bonisseur de la Bath</div>
      </div>
    );
  }
}
