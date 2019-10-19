import React, { useState, useEffect } from "react";
import DonationCard from "./DonationCard";
import SearchForm from "./SearchForm";
import axios from "axios";

const DonationsList = props => {
  // props.map(each => console.log(each));
  const { donations, setDonations, apiAdd } = props;
  const [searchValDon, setSearchDon] = useState("");
  const [infoState, setInfo] = useState([]);

  //====EVENT HANDLERS
  const handleChange = e => {
    const { value } = e.target;
    setSearchDon(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setInfo(
      infoState.filter(ele =>
        ele.name.toLowerCase().includes(searchValDon.toLowerCase())
      )
    );
    setDonations(
      donations.filter(ele =>
        ele.name.toLowerCase().includes(searchValDon.toLowerCase())
      )
    );
  };
  //=====

  //API input information testing meh
  let info = Object.keys(props);
  console.log("info", info);
  // const userTest = "";
  const userTest = 15;
  console.log(Number.isInteger(userTest));
  let inputData = [];
  //====
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
        setDonations(inputData);
        console.log(inputData);
        console.log(Object.keys(inputData), Object.values(inputData));
      })
      .catch(err => console.log(err));
  }, []);

  console.log(props);
  return (
    <div className="donationsList">
      <SearchForm
        searchValDon={searchValDon}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {/* <h2>DonationsList: {props}</h2> */}
      {/* <p>{props.base_experience}</p>
      <p>{props.height}</p>
      <p>{props.id}</p>
      <p>{props.name}</p>
      <p>{props.order}</p>
      <p>{props.weight}</p> */}

      {<DonationCard props={props[0]} />}
    </div>
  );
};

export default DonationsList;
