import React from "react";
import Cell from "./Cell";

const CellRow = ({ cells }) => {
  return (
    <div className="row">
      {cells.map((cell, index) => <Cell alive={cell} key={index} />)}
    </div>
  );
};

export default CellRow;
