import React from "react";

import logo from "../lollipop1bg.jpg";

/*** Styles ***/
import { Description, ShopImage, Title } from "../styles";

const Home = () => {
  return (
    <>
      <Title>Candylicious</Title>
      <Description>A place where candy lovers unite</Description>
      <ShopImage alt="candy aesthetic" src={logo} />
    </>
  );
};

export default Home;
