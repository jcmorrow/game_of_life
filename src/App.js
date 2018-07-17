import React, { Component } from "react";

import GameBoard from "./GameBoard";

import "./App.css";

import CellRow from "./CellRow";

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
            return <CellRow cells={row} key={i} />;
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
