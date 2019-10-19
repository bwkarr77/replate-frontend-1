import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import DonationsList from "./DonationsList";

const BusinessDetails = props => {
  console.log(props);
  const { businessData, setBusinessData, apiAdd } = props; //destructuring the values brought in from the App page
  const [searchVal, setSearch] = useState("");
  const [infoState, setInfo] = useState([]);

  //
  let info = Object.keys(props);
  console.log("info", info);
  // const userTest = "";
  const userTest = 15;
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

  useEffect(() => {
    axios
      .get(apiAdd + `${userTest}`)
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

  return (
    <div className="businessDetails">
      {/* <p>Object.keys(businessData):</p>
      {//===Print Object Keys from API.get===
      Object.keys(businessData).map(item => (
        <p>{item}</p>
      ))
      //====end object Keys
       */}
      <SearchForm
        searchVal={searchVal}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <h2>BusinessDetails: {props.id}</h2>
      <p>{props.base_experience}</p>
      <p>{props.height}</p>
      <p>{props.id}</p>
      <p>{props.name}</p>
      <p>{props.order}</p>
      <p>{props.weight}</p>
    </div>
  );
};

export default BusinessDetails;
