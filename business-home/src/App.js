import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
//
import BusinessDetails from "./components/BusinessDetails";
import DonationsList from "./components/DonationsList";
import DonationCard from "./components/DonationCard";
import NavBar from "./NavBar";

function App() {
  const [businessData, setBusinessData] = useState([]);
  const userNum = 15;
  let busKeys = [];

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${userNum}`) //replace with our API when it is known
      // .get(` ${userNum}`)  //actual API
      .then(results => {
        setBusinessData(results.data);
        console.log(results.data, businessData);
        // busKeys=Object.keys(results.data);
        console.log(Object.keys(results.data), Object.values(results.data));
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <p>App component Code:</p>
        {/* <br> */}
        <p>Object.keys(businessData):</p>
        {Object.keys(businessData).map(item => (
          // <div>
          <p>{item}</p>
          // </div>
        ))}
        {/* {console.log(Object.keys(businessData).map(e => e))} */}
        <BusinessDetails {...businessData} />
        <DonationsList {...businessData} />
        <DonationCard {...businessData} />
      </header>
    </div>
  );
}

export default App;
