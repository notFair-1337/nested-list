import React from "react";
import { useGenerateData } from "../../helpers";
import { ListItem } from "../ListItem";
import { AddItem } from "../AddItem";

const List = () => {
  const { data, addItem, removeItem, moveItem, removeList } = useGenerateData();
  return (
    <>
      <ListItem
        removeItem={removeItem}
        data={data}
        moveItem={moveItem}
        removeList={removeList}
      />
      <AddItem addItem={addItem} />
    </>
  );
};

export default List;
