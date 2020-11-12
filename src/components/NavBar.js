import React from "react";
import logo from "../lollipop1bg.jpg";
import { NavLink } from "react-router-dom";

/*** Styles ***/
import { Logo } from "../styles";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Logo to="/" className="navbar-brand">
        <img src={logo} width="50" alt="logo" />
      </Logo>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavLink to="/candies" className="nav-link">
              Candies <span className="sr-only">(current)</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
