import React from "react";
import { Description, ShopImage, Title } from "../styles";
import logo from "../lollipop1bg.jpg";

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
