import React, { Component } from 'react';
import "./BasicButtonPlannor.scss"

class BasicButtonPlannor extends Component {
  render() {
    return (
      <button
        className={ "basic-button-plannor " + ( this.props.className || "") }
        onClick={this.props.onClickAction}
      >
        {this.props.label}
      </button>
    );
  }
}

export default BasicButtonPlannor;
