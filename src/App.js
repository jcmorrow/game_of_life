import React, { Component } from "react";

import GameBoard from "./GameBoard";

import Cell from "./Cell";

import "./App.css";

class App extends Component {
  componentWillMount() {
    this.gameBoard = new GameBoard(10);
    this.tick();
  }

  render() {
    return (
      <div className="App">
        <pre>
          {this.state.gameBoardRows.map((row, i) => {
            return <pre key={i}>{row}</pre>;
          })}
        </pre>
        <button onClick={this.tick}>Next Generation</button>
      </div>
    );
  }

  tick = () => {
    this.gameBoard.tick();

    this.setState({ gameBoardRows: this.gameBoard.rows() });
  };
}

export default App;
