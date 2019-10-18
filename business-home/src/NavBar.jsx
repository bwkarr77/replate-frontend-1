import React from "react";
import { Route, NavLink, Switch, Link } from "react-router-dom";

import BusinessDetails from "./components/BusinessDetails";
import DonationsList from "./components/DonationsList";
import Home from "./components/Home";

const NavBar = () => {
  return (
    <div className="NavBar-container">
      <div className="NavBar-banner">
        <h2>NavBar</h2>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/DonationsList">Donations</NavLink>
        <NavLink to="/BusinessDetails">BusinessDetails</NavLink>
        {/* <NavLink to="">##</NavLink>
        <NavLink to="">##</NavLink>
        <NavLink to="">##</NavLink> */}
      </div>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/DonationsList"} component={DonationsList} />
        <Route exact path={"/BusinessDetails"} component={BusinessDetails} />
        {/* <Route exact path={"/"} component={Home} />
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/"} component={Home} /> */}
      </Switch>
    </div>
  );
};

export default NavBar;
