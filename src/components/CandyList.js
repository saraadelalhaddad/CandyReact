import SearchBar from "./SearchBar";
import { useState } from "react";

/*** Components ***/
import CandyItem from "./CandyItem";

/*** Styles ***/
import { ListWrapper } from "../styles";

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
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{candyList}</ListWrapper>
    </div>
  );
};

export default CandyList;
