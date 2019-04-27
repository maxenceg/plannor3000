// @flow
import React from 'react';
import PlannorPopin from '../PlannorPopin';

export default class CardDescriptionPopin extends React.Component {
  render() {
    return (
      <PlannorPopin
        isOpen={this.props.isCardDescriptionPopinOpen}
        handleClose={this.props.toggleCardDescriptionPopin}
        closeLabel="Valider"
        title={this.props.card.name}
        content={this.props.card.desc}
      />
    );
  }
}
