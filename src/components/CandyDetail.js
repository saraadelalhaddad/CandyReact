import React from "react";
import { DetailWrapper, GoBackButton } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const CandyDetail = (props) => {
  const candy = props.candy;

  return (
    <>
      <GoBackButton onClick={() => props.setCandy(null)}>
        Candy List
      </GoBackButton>
      <DetailWrapper>
        <h1>{candy.name}</h1>
        <img src={candy.image} alt={candy.name} />
        <p>{candy.description}</p>
        <p>{candy.price} KD</p>
        <DeleteButton candyId={candy.id} deleteCandy={props.deleteCandy} />
      </DetailWrapper>
    </>
  );
};

export default CandyDetail;

// const handleDelete = (candyId) => {
//   props.deleteCandy(candyId);
//   props.setCandy();
// };
