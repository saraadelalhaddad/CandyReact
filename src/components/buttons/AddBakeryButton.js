import BakeryModal from "../modals/BakeryModal";
import { BsPlusCircle } from "react-icons/bs";
import { useState } from "react";

const AddBakeryButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
      <BakeryModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default AddBakeryButton;
