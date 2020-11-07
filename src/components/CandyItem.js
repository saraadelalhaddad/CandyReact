import { CandyWrapper } from "../styles";

const CandyItem = (props) => {
  return (
    <CandyWrapper>
      <img
        alt={props.candyObject.name}
        src={props.candyObject.image}
        onClick={() => props.setCandy(props.candyObject)}
      />
      <p>{props.candyObject.name}</p>
      <p className="candy-price"> {props.candyObject.price} KD </p>
    </CandyWrapper>
  );
};

export default CandyItem;
