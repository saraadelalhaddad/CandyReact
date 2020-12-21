import { Link, Redirect, useParams } from "react-router-dom";
import React, { useState } from "react";

import DeleteButton from "./buttons/DeleteButton";
import { DetailWrapper } from "../styles";
import candyStore from "../stores/candyStore";
import { observer } from "mobx-react";

const CandyDetail = () => {
  const [bakerySlug, setBakerySlug] = useState(null);
  const { candySlug } = useParams();
  const candy = candyStore.candies.find((candy) => candy.slug === candySlug);
  console.log(candy);
  if (!bakerySlug) setBakerySlug(candy.bakery.slug);

  if (!candy) return <Redirect to={`/bakeries/${bakerySlug}`} />;

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

export default observer(CandyDetail);
