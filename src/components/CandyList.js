import { ListWrapper } from "../styles";
import candies from "../candies";
import CandyItem from "./CandyItem";
import SearchBar from "./SearchBar";
import { useState } from "react";

const CandyList = () => {
  const [query, setQuery] = useState("");

  const filteredCandies = candies.filter((candy) =>
    candy.name.toLowerCase().includes(query.toLowerCase())
  );
  const candyList = filteredCandies.map((candy) => (
    <CandyItem candy={candy} key={candy.id} />
  ));
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{candyList}</ListWrapper>
    </div>
  );
};

export default CandyList;
