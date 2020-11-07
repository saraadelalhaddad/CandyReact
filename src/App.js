import logo from "./lollipop1bg.jpg";
import "./App.css";
import {
  Description,
  ShopImage,
  Title,
  GlobalStyle,
  ThemeButton,
} from "./styles";
import { ThemeProvider } from "styled-components";
import React, { useState } from "react";
// import candies from "./candies";

/*** Components ***/
import CandyDetail from "./components/CandyDetail";
import CandyList from "./components/CandyList";
// import CandyItem from "./components/CandyItem";

const theme = {
  light: {
    mainColor: "black", // main font color
    backgroundColor: "white", // main background color
    pink: "#ff85a2",
  },
  dark: {
    mainColor: "white", // main font color
    backgroundColor: "black", // main background color
    pink: "#ff85a2",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [candy, setCandy] = useState(null);
  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  const setView = () => {
    if (candy) return <CandyDetail candy={candy} />;
    else return <CandyList setCandy={setCandy} />;
  };
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
      <div>
        <Title>Candylicious</Title>
        <Description>A place where candy lovers unite</Description>
        <ShopImage alt="candy aesthetic" src={logo} />
      </div>
      {/* <CandyList setCandy={setCandy} />
      <CandyDetail candy={candy} /> */}

      {setView()}
    </ThemeProvider>
  );
}

export default App;
