import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Buttons extends Component {
  render() {
    return (
      <div className="Buttons">
        <div className="Buttons-wrapper">
          <button>Reset</button>
        </div>
        <div className="Buttons-wrapper">
          <Link to="/home">
            <button>I&nbsp;Give&nbsp;Up</button>
          </Link>
        </div>
      </div>
    );
  }
}
