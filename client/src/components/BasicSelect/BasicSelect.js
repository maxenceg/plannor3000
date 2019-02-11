import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class BasicSelect extends Component {
  render() {
    return (
      <FormControl style={this.props.propStyle}>
        <InputLabel htmlFor="age-simple">{this.props.label}</InputLabel>
        <Select value={this.props.value} onChange={this.props.handleChange}>
          {this.props.options.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

export default BasicSelect;
