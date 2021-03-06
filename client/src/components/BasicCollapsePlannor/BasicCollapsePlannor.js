import React, { Component } from 'react';
import './BasicCollapsePlannor.scss';

class BasicCollapsePlannor extends Component {
  state = { isCollapsed: true };

  toggleCollapse = () => {
    this.setState({ isCollapsed: !this.state.isCollapsed });
  };

  render() {
    return (
      <div>
        <div onClick={this.toggleCollapse} className={'basic-collapse-plannor__title__container'}>
          {this.props.title}
          <i className="material-icons basic-collapse-plannor__title__button__icon">
            {this.state.isCollapsed ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}
          </i>
        </div>
        {!this.state.isCollapsed && this.props.children}
      </div>
    );
  }
}

export default BasicCollapsePlannor;
