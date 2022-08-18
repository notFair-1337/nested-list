import React from "react";
import { ListInstance } from "../ListInstance";

const ListItem = ({ data, removeItem, moveItem }) => {
  const ItemCallback = (item, idx) => {
    return (
      <ListInstance
        key={item.id}
        data={data}
        idx={idx}
        item={item}
        removeItem={removeItem}
        moveItem={moveItem}
      />
    );
  };
  return <>{data.length > 0 && <ul>{data.map(ItemCallback)}</ul>}</>;
};

export default ListItem;
