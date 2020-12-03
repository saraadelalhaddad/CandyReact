import { Title } from "../../styles";
import bakeryStore from "../../stores/bakeryStore";
import { observer } from "mobx-react";
import BakeryItem from "./BakeryItem";
import { useState } from "react";
import SearchBar from "../SearchBar";
import AddButton from "../buttons/AddButton";
import { ListWrapper } from "../../styles";

const BakeryList = () => {
  const [query, setQuery] = useState("");

  const bakeryList = bakeryStore.bakeries
    .filter((bakery) => bakery.name.toLowerCase().includes(query.toLowerCase()))
    .map((bakery) => <BakeryItem bakery={bakery} key={bakery.id} />);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <Title>Bakeries</Title>
      <AddButton />
      <ListWrapper className="row">{bakeryList}</ListWrapper>
    </div>
  );
};

export default observer(BakeryList);
