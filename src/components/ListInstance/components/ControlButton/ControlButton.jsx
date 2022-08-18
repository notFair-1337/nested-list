import React from "react";

const ControlButton = ({ direction, cb }) => {
  const symbol = direction === "up" ? <>&uarr;</> : <>&darr;</>;
  return <button onClick={cb}>{symbol}</button>;
};

export default ControlButton;
