import { ListWrapper } from "../styles";
import candies from "../candies";
import CandyItem from "./CandyItem";

const CandyList = () => {
  return (
    <ListWrapper>
      {candies.map((candy) => (
        <CandyItem candy={candy} key={candy.id} />
      ))}
    </ListWrapper>
  );
};

export default CandyList;
