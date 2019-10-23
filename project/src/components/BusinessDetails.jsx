import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import DonationsList from "./DonationsList";
import { getBusinessFood } from "./ApiContent";

const BusinessDetails = props => {
  console.log(props);
  const { businessData, setBusinessData, apiAdd } = props; //destructuring the values brought in from the App page
  const [searchVal, setSearch] = useState("");
  const [infoState, setInfo] = useState([]);
  const [foodList, setFoodList] = useState([]);

  //
  let info = Object.keys(props);
  console.log("info", info);
  const userTest = "";
  // const userTest = 15;
  console.log(Number.isInteger(userTest));
  let inputData = [];
  //====
  //====EVENT HANDLERS
  const handleChange = e => {
    const { value } = e.target;
    setSearch(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setInfo(
      infoState.filter(ele =>
        ele.name.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
    setBusinessData(
      businessData.filter(ele =>
        ele.name.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  };
  //=====

  const dummyToken = { username: "busnessUsername", password: "pass" };
  useEffect(() => {
    console.log("Business Axios...");
    axios
      .post(apiAdd, { dummyToken })
      .then(results => {
        //===depends on specificity of data to look up.
        if (Number.isInteger(userTest)) {
          inputData = results.data;
        } else {
          inputData = results.data.results;
        }
        //====
        setBusinessData(inputData);
        console.log(inputData);
        console.log(Object.keys(inputData), Object.values(inputData));
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    console.log("useEffect with ApiContent.js");
    getBusinessFood().then(data => setFoodList(data));
  });

  return (
    <div className="businessDetails">
      <SearchForm
        searchVal={searchVal}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <h2>BusinessDetails: {props.name}</h2>
      <p>Name: {props.name}</p>
      <p>Pass: {props.name}</p>
      <p>Organization: {props.name}</p>
      <p>Address: {props.name}</p>
      <p>email: {props.name}</p>
      <p>phone: {props.name}</p>
    </div>
  );
};

export default BusinessDetails;
