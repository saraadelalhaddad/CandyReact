import React from "react";

const BakeryItem = ({ bakery }) => {
  return <img src={bakery.image} alt={bakery.name} />;
};

export default BakeryItem;
