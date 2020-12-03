import React from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
/*** Components ***/
import AddButton from "../buttons/AddButton";
import bakeryStore from "../../stores/bakeryStore";
import candyStore from "../../stores/candyStore";
/*** Styles ***/
import { DetailWrapper } from "../../styles";
import CandyList from "../CandyList";

const BakeryDetail = () => {
  const { bakerySlug } = useParams();
  const bakery = bakeryStore.bakeries.find(
    (_bakery) => _bakery.slug === bakerySlug
  );
  const candies = bakery.candies.map((candy) =>
    candyStore.getCandyById(candy.id)
  );
  return (
    <div className="row">
      <div className="container">
        <DetailWrapper className="col-12">
          <h4>{bakery.name}</h4>
          <img src={bakery.image} alt="bakery" />
        </DetailWrapper>
      </div>
      <div className="col-12">
        <CandyList candies={candies} />
        <AddButton bakery={bakery} />
      </div>
    </div>
  );
};

export default observer(BakeryDetail);
