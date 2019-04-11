// @flow
import React from 'react';
import { timeInMinutes, durationInMinutes } from '../../helpers';
import styles from './CurrentHourLine.style';

export default class CurrentHourLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: {
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
      },
    };
  }
  componentDidMount() {
    var interval = setInterval(this.updateCurrentTime, 1000);
    this.setState({ interval: interval });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  updateCurrentTime = () => {
    this.setState({
      currentTime: {
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
      },
    });
  };

  render() {
    const topProp =
      (100 * (timeInMinutes(this.state.currentTime) - timeInMinutes(this.props.dayStartTime))) /
        (durationInMinutes(this.props.dayStartTime, this.props.dayEndTime) + 10) +
      '%';
    return <div style={{ ...styles.hourLine, top: topProp }} />;
  }
}
