import React, { Component } from "react";
import BackgroundStripes from "../../../Resources/images/stripes.png";
import { Tag } from "../../ui/misc";

export class MeetPlayers extends Component {
  state = {};
  render() {
    return (
      <div
        className="home_meetplayers"
        style={{ background: `#ffffff url(${BackgroundStripes})` }}
      >
        <div className="container">
          <div className="home_meetplayers_wrapper">
            <div className="home_card_wrappe">card</div>
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
                    border:'1px solid #0e1731'
                  }}
                >
                Meet them here
                </Tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MeetPlayers;
