import React from "react";
import { NavLink } from "react-router-dom";

// import BusinessDetails from "./components/BusinessDetails";
// import DonationsList from "./components/DonationsList";
// import Home from "./components/Home";

const NavBar = () => {
  return (
    <div className="NavBar-container">
      <div className="NavBar-banner">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/DonationsList">Donations</NavLink>
        <NavLink to="/BusinessDetails">BusinessDetails</NavLink>
      </div>
      {/* <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/DonationsList"} component={DonationsList} />
        <Route exact path={"/BusinessDetails"} component={BusinessDetails} />
      </Switch> */}
    </div>
  );
};

export default NavBar;
