import React from "react";
import { AuthButtonStyled } from "../../styles";
import { useState } from "react";
import Signin from "../modals/SigninModal";

const SigninButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <AuthButtonStyled onClick={openModal}>Sign In</AuthButtonStyled>
      <Signin isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SigninButton;
