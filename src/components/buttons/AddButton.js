import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import CandyModal from "../modals/CandyModal";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
      <CandyModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default AddButton;
