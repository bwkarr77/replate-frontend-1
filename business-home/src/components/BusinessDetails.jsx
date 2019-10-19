import React, { useState, useEffect } from "react";
import axios from "axios";

const BusinessDetails = props => {
  console.log(props);
  const { businessData, setBusinessData, apiAdd } = props; //destructuring the values brought in from the App page

  //
  let info = Object.keys(props);
  console.log("info", info);
  // const userTest = "";
  const userTest = 15;
  console.log(Number.isInteger(userTest));
  let inputData = [];

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
