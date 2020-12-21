import { CreateButtonStyled } from "../../styles";
import Modal from "react-modal";
import bakeryStore from "../../stores/bakeryStore";
import { useState } from "react";

const BakeryModal = ({ isOpen, closeModal }) => {
  const [bakery, setBakery] = useState({
    name: "",
    image: "",
  });
  const handleChange = (event) => {
    setBakery({ ...bakery, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    bakeryStore.createBakery(bakery);
    closeModal();
  };
  const handleImage = (event) =>
    setBakery({ ...bakery, image: event.target.files[0] });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Bakery Modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              required
              name="name"
              value={bakery.name}
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            name="image"
            type="file"
            className="form-control"
            onChange={handleImage}
          />
        </div>
        <CreateButtonStyled className="btn float-right" type="submit">
          Submit
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default BakeryModal;
