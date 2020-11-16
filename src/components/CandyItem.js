import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";

/*** Styles ***/
import { CandyWrapper } from "../styles";

const CandyItem = ({ candy }) => {
  return (
    <CandyWrapper className="col-lg-3 col-md-4 col-sm-6">
      <Link
        to={`/candies/${candy.slug}`}
        className="d-flex justify-content-center"
      >
        <img alt={candy.name} src={candy.image} />
      </Link>
      <p>{candy.name}</p>
      <p className="candy-price"> {candy.price} KD </p>
      <DeleteButton candyId={candy.id} />
    </CandyWrapper>
  );
};

export default CandyItem;
