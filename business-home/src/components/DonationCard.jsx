import React from "react";
import "../DonationCard.css";

const DonationCard = props => {
  const { base_experience, height, id, name, order, weight } = props;
  let donationArr = props.props.donations;
  console.log(donationArr);
  if (donationArr.length > 0) {
    console.log(donationArr[0].name);
    console.log(donationArr[0].url);
  }
  // const listOfDonations = donationArr.map(link => {
  //   console.log(link);
  // });

  // donationArr.map(each => {
  return (
    <section>
      {/* {donationArr.map(each => { */}
      <div className="donationCard">
        <img
          src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=931&q=80"
          alt="test"
        ></img>
        <div className="busCard-details">
          <h2>DonationCard:</h2>
          {/* <p>text1: {each.name}</p> */}
          {/* <p>text2: {each.url}</p> */}
          <p>text3: {donationArr.name} </p>
        </div>
      </div>
      ;
    </section>
  );
  // });

  //END DONATIONCARD
};

export default DonationCard;
