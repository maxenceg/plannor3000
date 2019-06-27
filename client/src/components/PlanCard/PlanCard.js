// @flow
import React from 'react';
import { timeInMinutes, durationInMinutes, getCurrentTime } from '../../helpers';
import './PlanCard.scss';

export default class PlanCard extends React.Component {
  componentWillMount() {
    this.props.devName &&
      setTimeout(() => {
        new Notification('JP alert: Ticket #' + this.props.card.idShort, {
          body: this.props.devName + ' should finish his/her ticket in 30 minutes!',
          requireInteraction: true,
        });
      }, (durationInMinutes(getCurrentTime(), this.props.card.endTime) - 30) * 60000);
  }

  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

  render() {
    const handleClick = (event, clickAction) => {
      event.stopPropagation();
      clickAction();
    };

    const setHover = isHovered =>
      this.setState({
        hover: isHovered,
      });

    const topProp =
      this.props.startTime && this.props.dayStartTime && this.props.dayEndTime
        ? (100 * (timeInMinutes(this.props.startTime) - timeInMinutes(this.props.dayStartTime))) /
            durationInMinutes(this.props.dayStartTime, this.props.dayEndTime) +
          '%'
        : null;
    const heightProp =
      this.props.startTime && this.props.endTime && this.props.dayStartTime && this.props.dayEndTime
        ? (100 * (timeInMinutes(this.props.endTime) - timeInMinutes(this.props.startTime))) /
            durationInMinutes(this.props.dayStartTime, this.props.dayEndTime) +
          '%'
        : null;
    const timedCardContainerStyle =
      topProp && heightProp
        ? { top: topProp, height: this.state.hover ? 'auto' : heightProp, position: 'absolute' }
        : null;
    return (
      <div
        style={{ ...this.props.style, ...timedCardContainerStyle }}
        className="plancard"
        onMouseLeave={() => setHover(false)}
        onClick={this.props.cardAction}
      >
        <div className="plancard__header">
          <div className="plancard__header__id-short">#{this.props.card.idShort}</div>
          <div className="plancard__header__labels-container">
            {this.props.card.labels.map(label => (
              <div
                className={'plancard__header__labels-container__label ' + label.color}
                key={label.name}
              >
                {label.name}
              </div>
            ))}
          </div>
        </div>
        <div
          className={
            'plancard__card-name ' +
            (!this.state.hover && this.props.devName ? 'plancard__card-name--not-hovered' : '')
          }
          onMouseEnter={() => setHover(true)}
        >
          {this.props.card.name}
          <div className="plancard__card-name__fade-out" />
        </div>
        <div className="plancard__footer-icon">
          {this.props.icons.map(icon => (
            <i
              key={icon.name}
              className="plancard__footer-icon__icon material-icons"
              onClick={event => handleClick(event, icon.action)}
            >
              {icon.name}
            </i>
          ))}
        </div>
      </div>
    );
  }
}
