import React, { Component } from "react";
import "./dice.css";

class Dice extends Component {
  render() {
    let cls = `fa-solid fa-8x fa-dice-${this.props.face} ${
      this.props.rolling && "shaking"
    } dice`;
    return <i className={cls}></i>;
  }
}

export default Dice;
