import React from "react";
import "../DonationCard.css";

const DonationCard = props => {
  const { base_experience, height, id, name, order, weight } = props;
  console.log(props["name"]);
  return (
    <div className="donationCard">
      <img
        src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=931&q=80"
        alt="test"
      ></img>
      <div className="busCard-details">
        <h2>DonationCard:</h2>
        <p>text1: {base_experience}</p>
        <p>text2: {height}</p>
        <p>text3: {id}</p>
      </div>
    </div>
  );
};

export default DonationCard;
