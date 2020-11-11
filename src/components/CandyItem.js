import { CandyWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const CandyItem = (props) => {
  const candy = props.candy;

  return (
    <CandyWrapper>
      <img
        alt={candy.name}
        src={candy.image}
        onClick={() => props.setCandy(candy)}
      />
      <p>{candy.name}</p>
      <p className="candy-price"> {candy.price} KD </p>
      <DeleteButton candyId={candy.id} deleteCandy={props.deleteCandy} />
    </CandyWrapper>
  );
};

export default CandyItem;
