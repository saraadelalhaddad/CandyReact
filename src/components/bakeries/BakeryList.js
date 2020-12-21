import AddBakeryButton from "../buttons/AddBakeryButton";
import BakeryItem from "./BakeryItem";
import { ListWrapper } from "../../styles";
import SearchBar from "../SearchBar";
import { Title } from "../../styles";
import bakeryStore from "../../stores/bakeryStore";
import { observer } from "mobx-react";
import { useState } from "react";

const BakeryList = () => {
  const [query, setQuery] = useState("");

  const bakeryList = bakeryStore.bakeries
    .filter((bakery) => bakery.name.toLowerCase().includes(query.toLowerCase()))
    .map((bakery) => <BakeryItem bakery={bakery} key={bakery.id} />);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <Title>Bakeries</Title>
      <AddBakeryButton />
      <ListWrapper className="row">{bakeryList}</ListWrapper>
    </div>
  );
};

export default observer(BakeryList);
