import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";

import BackgroundStripes from "../../../Resources/images/stripes.png";
import { Tag } from "../../ui/misc";
import HomeCards from "./cards";

export class MeetPlayers extends Component {
  state = {
    show: false
  };
  render() {
    return (
      <Reveal
        fraction={0.7}
        onReveal={() => {
          console.log("reveal");
          this.setState(this.setState({ show: true }));
        }}
      >
        <div
          className="home_meetplayers"
          style={{ background: `#ffffff url(${BackgroundStripes})` }}
        >
          <div className="container">
            <div className="home_meetplayers_wrapper">
              <div className="home_card_wrapper">
                <HomeCards show={this.state.show} />
              </div>
              <div className="home_text_wrapper">
                <div>
                  <Tag
                    add={{
                      background: "#0e1731",
                      fontSize: "100px",
                      color: "#ffffff",
                      display: "inline-block",
                      marginBottom: "20px"
                    }}
                  >
                    Meet
                  </Tag>
                </div>
                <div>
                  <Tag
                    add={{
                      background: "#0e1731",
                      fontSize: "100px",
                      color: "#ffffff",
                      display: "inline-block",
                      marginBottom: "20px"
                    }}
                  >
                    The
                  </Tag>
                </div>
                <div>
                  <Tag
                    add={{
                      background: "#0e1731",
                      fontSize: "100px",
                      color: "#ffffff",
                      display: "inline-block",
                      marginBottom: "20px"
                    }}
                  >
                    Players
                  </Tag>
                </div>
                <div>
                  <Tag
                    link={true}
                    linkTo="/the_team"
                    add={{
                      background: "#ffffff",
                      fontSize: "27px",
                      color: "#0e1731",
                      display: "inline-block",
                      marginBottom: "20px",
                      border: "1px solid #0e1731"
                    }}
                  >
                    Meet them here
                  </Tag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    );
  }
}

export default MeetPlayers;
