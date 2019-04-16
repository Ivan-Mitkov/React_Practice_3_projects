import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";

export class Stripes extends Component {
  state = {
    stripes: [
      {
        background: "#98c5e9",
        left: 120,
        rotate: 25,
        top: -260,
        delay: 0
      },
      {
        background: "#fff",
        left: 360,
        rotate: 25,
        top: -397,
        delay: 200
      },
      {
        background: "#98c5e9",
        left: 600,
        rotate: 25,
        top: -498,
        delay: 400
      }
    ]
  };
  showStripes = () => {
    return this.state.stripes.map((stripe, i) => (
      <Animate
        key={i}
        show={true}
        start={{
          background: "#fff",
          opacity: 0,
          left: 0,
          rotate: 0,
          top: 0
        }}
        enter={{
          background: [stripe.background],
          opacity: [1],
          left: [stripe.left],
          rotate: [stripe.rotate],
          top: [stripe.top],
          timing: {
            delay: stripe.delay,
            duration: 200,
            ease: easePolyOut
          },
          events: {
            end() {
              // console.log("animation finished");
            }
          }
        }}
      >
        {/* here we are using state from Animate */}
        {({ left, opacity, rotate, top, background }) => {
          return (
            <div
              className="stripe"
              style={{
                background,
                transform: `rotate(${rotate}deg) translate(${left}px, ${top}px)`,
                opacity
              }}
            />
          );
        }}
      </Animate>
    ));
  };

  render() {
    return <div className="featured_stripes">{this.showStripes()}</div>;
  }
}

export default Stripes;
