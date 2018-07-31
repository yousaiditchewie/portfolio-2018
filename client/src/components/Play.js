import React, { Component, Fragment } from "react";

import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissors from "../assets/scissors.png";
import computer from "../assets/computer.png";

export default class Play extends Component {
  render() {
    if (this.props.name === "Computer") {
      return <img src={computer} alt="" />;
    } else {
      return (
        <Fragment>
          <img src={rock} alt="" />
          <img src={paper} alt="" />
          <img src={scissors} alt="" />
        </Fragment>
      );
    }
  }
}
