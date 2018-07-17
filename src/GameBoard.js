import _ from "underscore";
import eachSlice from "./EachSlice";

class GameBoard {
  constructor(size) {
    this.size = size;
    this.lastGameBoard = _
      .range(this.size * this.size)
      .map(this.randomButUnlikely);
    this.nextGameBoard = _.range(this.size * this.size);
  }

  randomButUnlikely = () => (Math.random() > 0.8 ? 1 : 0);

  tick = () => {
    let column = 0;
    while (column < this.size) {
      let row = 0;
      while (row < this.size) {
        let total = 0;
        const horizontal = [row - 1, row, row + 1];
        const vertical = [column - 1, column, column + 1];
        const cell = column * this.size + row;
        const currentlyOn = this.lastGameBoard[cell];

        horizontal.forEach(x => {
          vertical.forEach(y => {
            const neighbor = x * this.size + y;
            if (
              x >= 0 &&
              x < this.size &&
              y >= 0 &&
              y < this.size &&
              neighbor !== cell
            ) {
              total = total + this.lastGameBoard[neighbor];
            }
          });
        });

        if (total === 3 || (currentlyOn && total === 2)) {
          this.nextGameBoard[cell] = 1;
        } else {
          this.nextGameBoard[cell] = 0;
        }

        row++;
      }
      column++;
    }

    this.lastGameBoard = this.nextGameBoard.map(x => x);
  };

  rows = () => eachSlice(this.lastGameBoard, this.size);
}

export default GameBoard;
