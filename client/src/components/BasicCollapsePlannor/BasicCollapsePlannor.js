import React, { Component } from 'react';
import "./BasicCollapsePlannor.scss"

class BasicCollapsePlannor extends Component {

  state = { isCollapsed: true };

  toggleCollapse = () => {
    this.setState({ isCollapsed: !this.state.isCollapsed });
  };

  render() {
    return (
      <div>
        <div className={"basic-collapse-plannor__title__container"}>
          {this.props.title}
          <div
            onClick={this.toggleCollapse}
            className={"basic-collapse-plannor__title__button"}
          >
            {this.state.isCollapsed ?
              <i className="material-icons basic-collapse-plannor__title__button__icon">keyboard_arrow_down</i>
              :
              <i className="material-icons basic-collapse-plannor__title__button__icon">keyboard_arrow_up</i>
            }
          </div>
        </div>
        { !this.state.isCollapsed && this.props.children }
      </div>
    );
  }
}

export default BasicCollapsePlannor;
