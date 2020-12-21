import AddButton from "../buttons/AddButton";
import CandyList from "../CandyList";
import { DetailWrapper } from "../../styles";
import React from "react";
import authStore from "../../stores/authStore";
import bakeryStore from "../../stores/bakeryStore";
import candyStore from "../../stores/candyStore";
import { observer } from "mobx-react";
import { useParams } from "react-router-dom";

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
        {authStore.user && <AddButton bakery={bakery} />}
      </div>
    </div>
  );
};

export default observer(BakeryDetail);
