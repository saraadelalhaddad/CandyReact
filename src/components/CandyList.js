import { ListWrapper } from "../styles";

import CandyItem from "./CandyItem";
import SearchBar from "./SearchBar";
import { useState } from "react";

const CandyList = (props) => {
  const [query, setQuery] = useState("");

  const filteredCandies = props.candies.filter((candy) =>
    candy.name.toLowerCase().includes(query.toLowerCase())
  );
  const candyList = filteredCandies.map((candy) => (
    <CandyItem
      candy={candy}
      deleteCandy={props.deleteCandy}
      key={candy.id}
      setCandy={props.setCandy}
    />
  ));
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{candyList}</ListWrapper>
    </div>
  );
};

export default CandyList;
