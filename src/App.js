import React from "react";
import logo from "./lollipop1bg.jpg";
import "./App.css";
import { Description, ShopImage, Title, GlobalStyle } from "./styles";
import CandyList from "./components/CandyList";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "#242424",
  backgroundColor: "#fefafb",
  pink: "#ff85a2",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <Title>Candylicious</Title>
        <Description>A place where candy lovers unite</Description>
        <ShopImage alt="candy aesthetic" src={logo} />
      </div>
      <CandyList />
    </ThemeProvider>
  );
}

export default App;
