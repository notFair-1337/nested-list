import { useState } from "react";

export const useGenerateData = () => {
  const [id, setID] = useState(0);
  const [data, setData] = useState([]);

  const addItem = (name) => {
    const newItem = {
      id,
      name: name,
    };
    setData([...data, newItem]);
    setID(id + 1);
  };
  const moveItem = (array, idxFrom, idxTo) => {
    const getReplacedArray = () => {
      let element = array[idxFrom];
      array.splice(idxFrom, 1);
      array.splice(idxTo, 0, element);
      return array;
    };

    setData([...getReplacedArray()]);
  };
  const removeItem = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const removeList = () => {
    setData([]);
  };

  return { id, data, addItem, removeItem, moveItem, removeList };
};
