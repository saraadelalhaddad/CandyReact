import React from "react";
import { DeleteButtonStyled } from "../../styles";
import candyStore from "../../stores/candyStore";

const DeleteButton = ({ candyId }) => {
  return (
    <DeleteButtonStyled onClick={() => candyStore.deleteCandy(candyId)}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
