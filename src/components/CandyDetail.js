import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";

/*** Components ***/
import DeleteButton from "./buttons/DeleteButton";
import candyStore from "../stores/candyStore";
/*** Styles ***/
import { DetailWrapper } from "../styles";

const CandyDetail = ({ candies }) => {
  const { candyId } = useParams();
  const candy = candies.find((candy) => candy.slug === candySlug);

  if (!candy) return <Redirect to="/candies" />;

  return (
    <>
      <Link to="/candies">Candy List</Link>
      <DetailWrapper>
        <h1>{candy.name}</h1>
        <img src={candy.image} alt={candy.name} />
        <p>{candy.description}</p>
        <p>{candy.price} KD</p>
        <DeleteButton candyId={candy.id} />
      </DetailWrapper>
    </>
  );
};

export default CandyDetail;
