import React from "react";
import { useGenerateData } from "../../helpers";
import { ListItem } from "../ListItem";
import { AddItem } from "../AddItem";

const ListGroup = ({ isDropOpen }) => {
  const { data, addItem, removeItem, moveItem } = useGenerateData();
  return (
    <>
      {isDropOpen && (
        <>
          <ListItem removeItem={removeItem} data={data} moveItem={moveItem} />
          <AddItem addItem={addItem} />
        </>
      )}
    </>
  );
};

export default ListGroup;
