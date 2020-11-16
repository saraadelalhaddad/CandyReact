import { useState } from "react";
import { observer } from "mobx-react";
/*** Components ***/
import CandyItem from "./CandyItem";
import SearchBar from "./SearchBar";
import AddButton from "./buttons/AddButton";
/*** Styles ***/
import { ListWrapper } from "../styles";
/*** Store ***/
import candyStore from "../stores/candyStore";

const CandyList = () => {
  const [query, setQuery] = useState("");

  const filteredCandies = candyStore.candies.filter((candy) =>
    candy.name.toLowerCase().includes(query.toLowerCase())
  );

  const candyList = filteredCandies.map((candy) => (
    <CandyItem candy={candy} key={candy.id} />
  ));

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <AddButton />
      <ListWrapper className="row">{candyList}</ListWrapper>
    </div>
  );
};

export default observer(CandyList);
