import React, { Component } from "react";
import Slide from "react-reveal/Slide";

export default class TimeUntil extends Component {
  state = {
    deadline: "Dec, 16, 2019",
    days: "0",
    hours: "0",
    min: "0",
    sec: "0"
  };

  getTimeUntil = deadline => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    // console.log(time)
    if (time < 0) {
      this.setState({ days: 0, hours: 0, min: 0, sec: 0 });
    } else {
      const sec = (time / 1000) % 60 | 0;
      const min = (time / 1000 / 60) % 60 | 0;
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, min, sec });
    }
    // console.log(this.state)
  };
  componentDidMount () {
    setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
  };

  

  render() {
    return (
      <Slide left delay={1000}>
        <div className="countdown_wrapper">
          <div className="countdown_top">Event start in:</div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">{this.state.days}</div>
              <div className="countdown_tag">Days</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.hours}</div>
              <div className="countdown_tag">Hs</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.min}</div>
              <div className="countdown_tag">Min</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.sec}</div>
              <div className="countdown_tag">Sec</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}
