import React, { useState } from "react";
import { Route, Switch } from "react-router";
// import slugify from "react-slugify";
/*** Styles ***/
import "./App.css";
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

/*** Components ***/
import CandyDetail from "./components/CandyDetail";
import CandyList from "./components/CandyList";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

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

      <Switch>
        <Route path="/candies/:candySlug">
          <CandyDetail />
        </Route>
        <Route path="/candies">
          <CandyList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
