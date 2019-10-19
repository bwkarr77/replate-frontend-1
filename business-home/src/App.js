import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Route, Switch, Link } from "react-router-dom";
//
import BusinessDetails from "./components/BusinessDetails";
import DonationsList from "./components/DonationsList";
import DonationCard from "./components/DonationCard";
import NavBar from "./NavBar";
import Home from "./components/Home";

function App() {
  const [businessData, setBusinessData] = useState([]);
  const [donations, setDonations] = useState([]);
  //-----Below is for testing ONLY!!! change url when REAL API is up and running----
  const apiAdd = "https://pokeapi.co/api/v2/pokemon/";
  //====^^^^^^^^^====
  let busKeys = [];

  // useEffect(() => {
  //   axios
  //     // .get(`https://pokeapi.co/api/v2/pokemon/${userNum}`) //replace with our API when it is known
  //     .get(`https://pokeapi.co/api/v2/pokemon/`)
  //     // .get(` ${userNum}`)  //actual API
  //     .then(results => {
  //       setBusinessData(results.data.results);
  //       console.log(results.data.results);
  //       // busKeys=Object.keys(results.data);
  //       console.log(
  //         Object.keys(results.data.results),
  //         Object.values(results.data.results)
  //       );
  //     })
  //     .catch(err => console.log(err));
  // }, []);

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
