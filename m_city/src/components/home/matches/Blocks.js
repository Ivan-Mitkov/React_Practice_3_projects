import React, { Component } from "react";
import { firebaseMatches } from "../../../firebase";
import { firebaseLooper } from "../../ui/misc";
import MatchesBlock from "../../ui/matches_block";
import Slide from "react-reveal/Slide";

export class Blocks extends Component {
  state = {
    matches: []
  };
  componentDidMount() {
    firebaseMatches
      .limitToLast(6)
      .once("value")
      .then(snapshot => {
        const snapshotToArray = firebaseLooper(snapshot);
        //reverse array destroy initial array
        const copy = [...snapshotToArray];
        const reverseResult = copy.reverse();
        this.setState({ matches: reverseResult });
      });
  }

  showMatches = matches => {
    if (matches.length > 0) {
      const matchesToDisplay = matches.map(match => (
        <Slide bottom key={match.id}>
          <div className="item" >
            <div className="wrapper">
              <MatchesBlock match={match} />
            </div>
          </div>
        </Slide>
      ));
      return matchesToDisplay;
    } else {
      return null;
    }
  };

  render() {
    return (
      <div className="home_matches">{this.showMatches(this.state.matches)}</div>
    );
  }
}

export default Blocks;
