// @flow
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class PlannorPopin extends React.Component {
  render() {
    return (
      <Dialog
        open={this.props.isOpen}
        onClose={this.props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{this.props.title}</DialogTitle>
        <DialogContent>{this.props.content}</DialogContent>
        <DialogActions>
          {this.props.handleClose && (
            <Button onClick={this.props.handleClose} color="primary">
              {this.props.closeLabel}
            </Button>
          )}
          {this.props.handleSubmit && (
            <Button onClick={this.props.handleSubmit} color="primary" autoFocus>
              {this.props.submitLabel}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    );
  }
}
