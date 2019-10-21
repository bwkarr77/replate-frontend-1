import React, { useState, useEffect } from "react";
import "./App.css";
import { Route } from "react-router-dom";
//
import BusinessDetails from "./components/BusinessDetails";
import DonationsList from "./components/DonationsList";
import DonationCard from "./components/DonationCard";
import NavBar from "./NavBar";
import Home from "./components/Home";

function App() {
  const [businessData, setBusinessData] = useState([]);
  const [donations, setDonations] = useState([]);
  // const [donations, setDonations] = useState({ id: 0, name: "fish" });

  //-----Below is for testing ONLY!!! change url when REAL API is up and running----
  const apiAdd = "https://pokeapi.co/api/v2/pokemon/";
  //====^^^^^^^^^====
  let busKeys = [];

  return (
    <main>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <p>App component Code:</p>
          {/* <p>Object.keys(businessData):</p>
          {//===Print Object Keys from API.get===
          Object.keys(businessData).map(item => (
            <p>{item}</p>
          ))
          //====end object Keys
           */}
          <Route
            exact
            path={"/"}
            render={props => {
              return <Home props={props} />;
            }}
          />
          <Route
            exact
            path={"/DonationsList"}
            render={props => {
              return (
                <DonationsList
                  props={props}
                  donations={donations}
                  setDonations={setDonations}
                  apiAdd={apiAdd}
                />
              );
            }}
          />
          <Route
            exact
            path={"/BusinessDetails"}
            render={props => {
              console.log(apiAdd);
              return (
                <BusinessDetails
                  props={props}
                  businessData={businessData}
                  setBusinessData={setBusinessData}
                  apiAdd={apiAdd}
                />
              );
            }}
          />
          <Route
            path="/DonationCard/:id"
            render={props => {
              return <DonationCard props={props} donations={donations} />;
            }}
          />
          {/* {console.log(Object.keys(businessData).map(e => e))} */}
          {/* <div className="testing">
            <br />
            <p>BELOW IS JUST A TEST</p>
            <BusinessDetails {...businessData} />
            <DonationsList {...businessData} />
          </div> */}
        </header>
      </div>
    </main>
  );
}

export default App;
