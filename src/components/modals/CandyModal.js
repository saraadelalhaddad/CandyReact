import { useState } from "react";
import Modal from "react-modal";
import { CreateButtonStyled } from "../../styles";
import candyStore from "../../stores/candyStore";

const CandyModal = ({ isOpen, closeModal, oldCandy }) => {
  // const [candy, setCandy] = useState({
  //   name: "",
  //   price: 0,
  //   description: "",
  //   image: "",
  // });
  const [candy, setCandy] = useState(
    oldCandy ?? {
      name: "",
      price: "",
      description: "",
      image: "",
    }
  );
  const handleChange = (event) => {
    setCandy({ ...candy, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    candyStore[oldCandy ? "updateCandy" : "createCandy"](candy);
    closeModal();
  };
  // const UpdateButton = () => {
  //   const [isOpen, setIsOpen] = useState(false);
  //   const closeModal = () => setIsOpen(false);
  //   const openModal = () => setIsOpen(true);
  // };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Candy Modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              required
              name="name"
              value={candy.name}
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              value={candy.price}
              type="number"
              min="1"
              className="form-control"
              name="price"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            value={candy.description}
            type="text"
            className="form-control"
            name="description"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            value={candy.image}
            type="text"
            className="form-control"
            name="image"
            onChange={handleChange}
          />
        </div>
        <CreateButtonStyled className="btn float-right" type="submit">
          {oldCandy ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default CandyModal;
