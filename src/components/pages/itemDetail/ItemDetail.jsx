import React from "react";
import Counter from "../../common/counter/Counter";

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h1>{item.title}</h1>
      <h2>{item.description}</h2>
      <h3>{item.price}</h3>
      <Counter />
    </div>
  );
};

export default ItemDetail;
