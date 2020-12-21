import CandyItem from "./CandyItem";
import { ListWrapper } from "../styles";
import SearchBar from "./SearchBar";
import { Title } from "../styles";
import { observer } from "mobx-react";
import { useState } from "react";

const CandyList = ({ candies = [] }) => {
  const [query, setQuery] = useState("");

  const candyList = candies
    .filter((candy) =>
      candy ? candy.name.toLowerCase().includes(query.toLowerCase()) : false
    )
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
      <ListWrapper className="row">{candyList}</ListWrapper>
    </div>
  );
};

export default observer(CandyList);
