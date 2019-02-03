import React, { Component } from "react";
import "./resources/styles.css";

import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VenuInfo from "./components/venueInfo";
import Highlights from "./components/highlights";
import Pricing from './components/pricing';
import Location from './components/location';

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: "1500px" }}
      >
        <Header />
        <Featured />
        <VenuInfo />
        <Highlights />
        <Pricing/>
        <Location/>
      </div>
    );
  }
}

export default App;
