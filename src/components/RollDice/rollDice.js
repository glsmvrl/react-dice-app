import React, { Component } from "react";
import Dice from "../Dice/dice";
import "./rollDice.css";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  state = { dice1: "one", dice2: "two", rolling: false };
  roll = () => {
    const newDiceFirst =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const newDiceScond =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    this.setState({ dice1: newDiceFirst, dice2: newDiceScond, rolling: true });

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 600);
  };
  render() {
    return (
      <div className="rollDice">
        <div className="rollDice--container">
          <Dice face={this.state.dice1} rolling={this.state.rolling} />
          <Dice face={this.state.dice2} rolling={this.state.rolling} />
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? "Hoop..." : "Bul karayı al parayı"}
        </button>
      </div>
    );
  }
}

export default RollDice;
