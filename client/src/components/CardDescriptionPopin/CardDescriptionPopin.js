// @flow
import React from 'react';
import PlannorPopin from '../PlannorPopin';
import BasicButton from '../BasicButton';
import styles from './CardDescriptionPopin.style';

export default class CardDescriptionPopin extends React.Component {
  render() {
    const content = (
      <div>
        <div style={styles.editTeamPopinFooter}>
          {this.props.card.name}
          {this.props.card.desc}
          <BasicButton label="Valider" onClickAction={this.props.toggleCardDescriptionPopin} />
        </div>
      </div>
    );
    return <PlannorPopin style={styles.editTeamPopin} content={content} />;
  }
}
