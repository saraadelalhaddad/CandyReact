import SearchBar from "./SearchBar";
import { useState } from "react";

/*** Components ***/
import CandyItem from "./CandyItem";
import AddButton from "./buttons/AddButton";
/*** Styles ***/
import { ListWrapper } from "../styles";

const CandyList = ({ candies, createCandy, deleteCandy }) => {
  const [query, setQuery] = useState("");
  const filteredCandies = candies.filter((candy) =>
    candy.name.toLowerCase().includes(query.toLowerCase())
  );
  const candyList = filteredCandies.map((candy) => (
    <CandyItem candy={candy} deleteCandy={deleteCandy} key={candy.id} />
  ));
  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <AddButton />
      <ListWrapper className="row">{candyList}</ListWrapper>
    </div>
  );
};

export default CandyList;
