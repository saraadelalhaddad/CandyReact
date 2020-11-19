import { useState } from "react";
/*** Styling ***/
import { UpdateButtonStyled } from "../styles";

/*** Components ***/
import CandyModal from "./modals/CandyModal";

const UpdateButton = ({ candy }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <CandyModal isOpen={isOpen} closeModal={closeModal} oldCandy={candy} />
    </>
  );
};

export default UpdateButton;
