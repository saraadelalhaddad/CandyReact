import React from "react";
import { Route, Switch } from "react-router";
// import slugify from "react-slugify";
/*** Styles ***/
import "./App.css";

/*** Components ***/
import CandyDetail from "./components/CandyDetail";
import CandyList from "./components/CandyList";
import Home from "./components/Home";
import BakeryList from "./components/bakeries/BakeryList";
import BakeryDetail from "./components/bakeries/BakeryDetail";
import candyStore from "./stores/candyStore";

const Routes = () => {
  return (
    <Switch>
      <Route path="/candies/:candySlug">
        <CandyDetail />
      </Route>
      <Route path="/candies">
        <CandyList candies={candyStore.candies} />
      </Route>
      <Route path="/bakeries/:bakerySlug">
        <BakeryDetail />
      </Route>
      <Route path="/bakeries">
        <BakeryList />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
