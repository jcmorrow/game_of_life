import React from "react";

const Cell = props => {
  return <div className={props.alive ? "cell alive" : "cell dead"} />;
};

export default Cell;
