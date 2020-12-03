import { useState } from "react";
import { observer } from "mobx-react";
/*** Components ***/
import CandyItem from "./CandyItem";
import SearchBar from "./SearchBar";
import AddButton from "./buttons/AddButton";
/*** Styles ***/
import { ListWrapper } from "../styles";
import { Title } from "../styles";
/*** Store ***/
import candyStore from "../stores/candyStore";

const CandyList = ({ candies }) => {
  const [query, setQuery] = useState("");

  const candyList = candies
    .filter((candy) => candy.name.toLowerCase().includes(query.toLowerCase()))
    .map((candy) => <CandyItem candy={candy} key={candy.id} />);

  // const filteredCandies = candyStore.candies.filter((candy) =>
  //   candy.name.toLowerCase().includes(query.toLowerCase())
  // );

  // const candyList = filteredCandies.map((candy) => (
  //   <CandyItem candy={candy} key={candy.id} />
  // ));

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <Title>Candies</Title>
      <AddButton />
      <ListWrapper className="row">{candyList}</ListWrapper>
    </div>
  );
};

export default observer(CandyList);
