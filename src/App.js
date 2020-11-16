import React, { useState } from "react";
import candies from "./candies";
import { Route, Switch } from "react-router";
import slugify from "react-slugify";
/*** Styles ***/
import "./App.css";
import { GlobalStyle, ThemeButton } from "./styles";
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

  const [_candies, setCandies] = useState(candies);

  const deleteCandy = (candySlug) => {
    const updatedCandies = _candies.filter((candy) => candy.id !== candySlug);
    setCandies(updatedCandies);
  };

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  const createCandy = (newCandy) => {
    setCandies([..._candies, newCandy]);
  };
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} />

      <ThemeButton onClick={toggleTheme}>
        {currentTheme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
      <Switch>
        <Route path="/candies/:candySlug">
          <CandyDetail candies={_candies} deleteCandy={deleteCandy} />
        </Route>
        <Route path="/candies">
          <CandyList
            candies={_candies}
            deleteCandy={deleteCandy}
            createCandy={createCandy}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
