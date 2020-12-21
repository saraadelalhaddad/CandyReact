import React from "react";
import logo from "../lollipop1bg.jpg";
import { NavLink } from "react-router-dom";
import SignUpButton from "./buttons/SignUpButton";
import SignInButton from "./buttons/SignInButton";
import authStore from "../stores/authStore";
import { FiLogOut } from "react-icons/fi";

import { observer } from "mobx-react";
/*** Styles ***/
import { Logo, UsernameStyled } from "../styles";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Logo to="/" className="navbar-brand">
        <img src={logo} width="50" alt="logo" />
      </Logo>
      <>
        {authStore.user ? (
          <>
            <UsernameStyled>Hello, {authStore.user.username}</UsernameStyled>
            <FiLogOut onClick={authStore.signout} size="2em" color="red" />
          </>
        ) : (
          <>
            <SignInButton />
            <SignUpButton />
          </>
        )}
      </>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavLink to="/bakeries" className="nav-link">
              Bakeries <span className="sr-only">(current)</span>
            </NavLink>
            <NavLink to="/candies" className="nav-link">
              Candies <span className="sr-only">(current)</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default observer(NavBar);
