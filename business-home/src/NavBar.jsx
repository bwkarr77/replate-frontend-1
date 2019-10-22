import React from "react";
import { NavLink } from "react-router-dom";

// import BusinessDetails from "./components/BusinessDetails";
// import DonationsList from "./components/DonationsList";
// import Home from "./components/Home";

const NavBar = () => {
  return (
    <div className="NavBar-container">
      <div className="NavBar-banner">
        <NavLink to="/">
          <i class="material-icons">home</i>
        </NavLink>
        <NavLink to="/DonationsList">
          <i class="material-icons">fastfood</i>
        </NavLink>
        <NavLink to="/BusinessDetails">
          <i class="material-icons">account_circle</i>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
