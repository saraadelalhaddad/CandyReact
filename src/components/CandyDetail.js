import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";

/*** Components ***/
import DeleteButton from "./buttons/DeleteButton";

/*** Styles ***/
import { DetailWrapper } from "../styles";

const CandyDetail = (props) => {
  const candySlug = useParams().candySlug;
  console.log("CandyDetail -> candySlug", candySlug);

  const candy = props.candies.find((candy) => candy.slug === candySlug);

  if (!candy) return <Redirect to="/candies" />;

  return (
    <>
      <Link to="/candies">Candy List</Link>
      <DetailWrapper>
        <h1>{candy.name}</h1>
        <img src={candy.image} alt={candy.name} />
        <p>{candy.description}</p>
        <p>{candy.price} KD</p>
        <DeleteButton candySlug={candy.id} deleteCandy={props.deleteCandy} />
      </DetailWrapper>
    </>
  );
};

export default CandyDetail;
