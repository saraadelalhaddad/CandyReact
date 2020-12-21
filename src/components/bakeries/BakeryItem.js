import { Link } from "react-router-dom";
import React from "react";

const BakeryItem = ({ bakery }) => {
  return (
    <>
      <Link
        to={`/bakeries/${bakery.slug}`}
        className="d-flex justify-content-center"
      >
        <img src={bakery.image} alt={bakery.name} />;
      </Link>
      <h2>{bakery.name}</h2>
    </>
  );
};

export default BakeryItem;
