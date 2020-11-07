import React from "react";
import { DetailWrapper } from "../styles";

const CandyDetail = (props) => {
  const candy = props.candy;
  return (
    <DetailWrapper>
      <h1>{candy.name}</h1>
      <img src={candy.image} alt={candy.name} />
      <p>{candy.description}</p>
      <p>{candy.price} KD</p>
    </DetailWrapper>
  );
};

export default CandyDetail;
