import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class BasicButton extends Component {
  render() {
    return (
      <Button onClick={this.props.onClickAction} variant="contained" color="primary">
        {this.props.label}
      </Button>
    );
  }
}

export default BasicButton;
