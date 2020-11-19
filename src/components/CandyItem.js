import { Link } from "react-router-dom";

/*** Components ***/
import DeleteButton from "./buttons/DeleteButton";

/*** Styles ***/
import { CandyWrapper } from "../styles";
import UpdateButton from "./UpdateButton";
import { observer } from "mobx-react";
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
      <UpdateButton candy={candy} />
      <DeleteButton candyId={candy.id} />
    </CandyWrapper>
  );
};

export default observer(CandyItem);
