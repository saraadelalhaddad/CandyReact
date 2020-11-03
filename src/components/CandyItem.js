import { CandyWrapper } from "../styles";

const CandyItem = (props) => {
  const candy = props.candy;
  return (
    <CandyWrapper key={candy.id}>
      <img alt={candy.name} src={candy.image} />
      <p>{candy.name}</p>
      <p className="candy-price"> {candy.price} KD </p>
    </CandyWrapper>
  );
};

export default CandyItem;
