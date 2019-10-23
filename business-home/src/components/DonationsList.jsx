import React, { useState, useEffect } from "react";
import DonationCard from "./DonationCard";
import SearchForm from "./SearchForm";
import axios from "axios";
import Dropdown from "react-dropdown";

import { dummyData } from "./DummyData";

const DonationsList = props => {
  // console.log(props);
  const { donations, setDonations, apiAdd } = props;
  const [searchValDon, setSearchDon] = useState("");
  const [infoState, setInfo] = useState([]);
  const [filteredDonations, setFilteredDons] = useState([]);
  const [userToken, setUserToken] = useState([]);

  //====EVENT HANDLERS
  const handleChange = e => {
    const { value, name } = e.target; //destructuring to retrieve the value
    setSearchDon(value);
    console.log(e.target, value, name);
  };
  const handleSubmit = e => {
    console.log(`DONATIONS:`, donations);
    e.preventDefault();
    console.log(e.target);
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
    setFilteredDons();

    console.log(donations);
    console.log(filteredDonations);
  };
  //=====

  const userTest = "";
  // const userTest = 15;
  let inputData = [];
  //====
  //
  //

  //insomnia = dummytoken
  // const loginKey = { username: "busnessUsername", password: "pass" };
  // useEffect(() => {
  //   console.log("axios is running");
  //   const getDonations = () => {
  //     axios
  //       .get(apiAdd)
  //       .then(results => {
  //         //===depends on specificity of data to look up.
  //         if (Number.isInteger(userTest)) {
  //           inputData = results.data;
  //         } else {
  //           inputData = results.data.results;
  //         }
  //         //====
  //         setDonations(inputData);
  //         console.log(inputData);
  //         console.log(Object.keys(inputData), Object.values(inputData));
  //       })
  //       .catch(err => console.log(err));
  //   };
  //   getDonations();
  // }, []);

  //=================================
  //==========TEST API===============
  const loginTest = {
    email: "eve.holt@reqres.in",
    password: "cityslicka"
  };
  const testApi = "https://reqres.in/api/";
  useEffect(() => {
    const getInformation = () => {
      console.log("testAPI running");
      axios
        .post(`${testApi}login`, loginTest)
        // .get(`${testApi}users/2`)
        .then(results => {
          console.log(results.data.token);
          setUserToken(results.data.token);
          console.log(userToken);
        })
        .catch(err => console.log(err));
    };
    getInformation();
  }, []);
  //=========END TEST API============
  //=================================

  //
  // console.log(filteredDonations);
  const options = ["one", "two", "three"];

  // console.log("donations", donations);
  useEffect(() => {
    if (donations == 0) {
      setFilteredDons(dummyData);
      console.log("filtered", filteredDonations);
    }
  });

  //===========================================
  return (
    <section className="donations-container">
      DONATIONS PAGE:
      <div className="donation-header">
        <SearchForm
          searchValDon={searchValDon}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <Dropdown
          options={options}
          onChange={`beedrill`}
          value={options[0]}
          placeholder="somethingclever"
        >
          DropDown
        </Dropdown>
      </div>
      <div className="donationsList">
        {/* {console.log(filteredDonations, donations)} */}
        {filteredDonations !== 0
          ? filteredDonations.map(each => {
              console.log("true");
              return <DonationCard each={each} />;
            })
          : donations.map(each => {
              console.log("else");
              return <DonationCard each={each} />;
            })}
      </div>
    </section>
  );
};

export default DonationsList;
