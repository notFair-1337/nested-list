import React, { useEffect } from "react";
import { useGenerateData } from "../../helpers";
import { ListItem } from "../ListItem";
import { AddItem } from "../AddItem";

const ListGroup = ({ isDropOpen }) => {
  const { data, addItem, removeItem, removeList, moveItem } = useGenerateData();

  useEffect(() => {
    if (!isDropOpen) {
      removeList();
    }
  }, [isDropOpen]);
  return (
    <>
      {isDropOpen && (
        <>
          <ListItem
            removeItem={removeItem}
            data={data}
            moveItem={moveItem}
            removeList={removeList}
          />
          <AddItem addItem={addItem} />
        </>
      )}
    </>
  );
};

export default ListGroup;
