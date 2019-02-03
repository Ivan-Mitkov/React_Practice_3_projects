import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";
import MyButton from "../ui/MyButton";

export class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, dolore animi explicabo consequatur velit temporibus earum, recusandae iste itaque iure veniam eos, sequi voluptatem. Nemo voluptatum optio quia a quo.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quia quod! Maiores non eos doloribus tempore eaque, dignissimos reprehenderit porro soluta aliquid dolorem quas qui eius distinctio vel eum. Provident.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed suscipit veniam quos autem eum! Perferendis rem illo facere dolor tenetur, excepturi totam architecto asperiores corrupti debitis ducimus sunt inventore pariatur!"
    ],
    linkto: [
      "https://www.xnxx.com",
      "https://www.xvideos.com",
      "https://www.xxx.com"
    ],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((d, i) => (
      <Zoom key={this.state.positions[i].toString()} delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${d}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <MyButton
                text={"By Now"}
                link={this.state.linkto[i]}
                bck="#ffa800"
                color="#fff"
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
