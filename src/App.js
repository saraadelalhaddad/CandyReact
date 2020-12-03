import React, { useState } from "react";
import { observer } from "mobx-react";
// import slugify from "react-slugify";
/*** Styles ***/
import "./App.css";
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

/*** Components ***/
import NavBar from "./components/NavBar";
import Routes from "./Routes";
import bakeryStore from "./stores/bakeryStore";
import candyStore from "./stores/candyStore";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} />
      {bakeryStore.loading || candyStore.loading ? (
        <h1>Loadinggg </h1>
      ) : (
        <Routes />
      )}
    </ThemeProvider>
  );
}

export default observer(App);
