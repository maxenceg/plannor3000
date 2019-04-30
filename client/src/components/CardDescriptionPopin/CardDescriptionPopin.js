// @flow
import React from 'react';
import PlannorPopin from '../PlannorPopin';

export default class CardDescriptionPopin extends React.Component {
  render() {
    const content = (
      <div>
        {this.props.card.desc && <div>{this.props.card.desc}</div>}
        <div>
          {this.props.card.checklists &&
            this.props.card.checklists.length > 0 &&
            this.props.card.checklists.map(checklist => (
              <div>
                {checklist.name}
                <ul key={checklist.id}>
                  {checklist.checkItems.map(checkItem => (
                    <li key={checkItem.id}>{checkItem.name}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    );
    console.log(this.props.card);
    return (
      <PlannorPopin
        isOpen={this.props.isCardDescriptionPopinOpen}
        handleClose={this.props.toggleCardDescriptionPopin}
        closeLabel="Valider"
        title={this.props.card.name}
        content={content}
      />
    );
  }
}
