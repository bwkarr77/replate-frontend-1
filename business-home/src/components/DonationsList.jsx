import React from "react";
import DonationCard from "./DonationCard";

const DonationsList = props => {
  // props.map(each => console.log(each));
  console.log(props);
  return (
    <div className="donationsList">
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
