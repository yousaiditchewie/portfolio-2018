import React, { Component } from "react";

import Play from "./Play";

export default class Player extends Component {
  render() {
    return (
      <div className="Player">
        <Play name={this.props.name} />
      </div>
    );
  }
}
