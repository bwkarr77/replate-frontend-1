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
    console.log(donations);
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
  console.log("info", Object.keys(props));
  const userTest = "";
  // const userTest = 15;
  let inputData = [];
  //====
  useEffect(() => {
    console.log("axios is running");
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
  console.log("after useEffect", inputData);

  console.log(props);
  console.log(donations);
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
      {<DonationCard props={props} />}
      {/* {donations.map(each => {
        return (
<Link key={each.id} to={'/'}
        <DonationCard each={each} /> 
        )
      })} */}
    </div>
  );
};

export default DonationsList;
