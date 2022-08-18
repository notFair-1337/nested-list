import React, { useState } from "react";
import { ListGroup } from "../ListGroup";
import { ControlButton } from "./components";

const ListInstance = ({ data, item, removeItem, moveItem, idx }) => {
  const [isDropOpen, setIsDropOpen] = useState(false);
  const handleMoveItemUp = () => moveItem(data, idx, idx - 1);
  const handleMoveItemDown = () => moveItem(data, idx, idx + 1);
  const handleSublistToggle = () => setIsDropOpen(!isDropOpen);
  const handleItemRemove = () => removeItem(item.id);
  return (
    <li key={item.id}>
      <span>{item.name}</span>
      {idx !== 0 && <ControlButton cb={handleMoveItemUp} direction="up" />}
      {idx !== data.length - 1 && (
        <ControlButton cb={handleMoveItemDown} direction="down" />
      )}
      <button onClick={handleSublistToggle}>
        {isDropOpen ? "Remove sublist" : "Add sublist"}
      </button>
      <button onClick={handleItemRemove}>Remove</button>
      <ListGroup isDropOpen={isDropOpen} />
    </li>
  );
};

export default ListInstance;
