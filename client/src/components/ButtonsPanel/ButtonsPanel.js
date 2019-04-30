// @flow
import React from 'react';
import './ButtonsPanel.scss'
import BasicButtonPlannor from '../BasicButtonPlannor/BasicButtonPlannor';

export default class ButtonsPanel extends React.Component {
  render() {
    return (
      <div className="buttons-panel__container">
        {/*<div className="buttons-panel__button">*/}
          {/*<BasicButton*/}
            {/*label={<i className="material-icons">settings</i>}*/}
          {/*/>*/}
        {/*</div>*/}
        {!!this.props.isTeamEditable && (
          <div className="buttons-panel__button">
            <BasicButtonPlannor
              label={<i className="material-icons">people</i>}
              onClickAction={this.props.editTeamAction}
            />
          </div>
        )}
        <div className="buttons-panel__button">
          <BasicButtonPlannor
            label={<i className="material-icons">refresh</i>}
            onClickAction={this.props.refreshAction}
          />
        </div>
      </div>
    );
  }
}
