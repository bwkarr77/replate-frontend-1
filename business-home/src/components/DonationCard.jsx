import React, { useState } from "react";
import "../DonationCard.css";

const DonationCard = props => {
  const [donation, setDonation] = useState(undefined);
  const { name, date, quantity, status, description } = props.each;
  // console.log(props.each);
  const propKeys = Object.keys(props.each);
  //"id", "name", "location", "date", "time", "description", "quantity", "phone", "accepted", "status"
  // console.log(propKeys);

  if (props.each !== undefined) {
    // console.log(props.each.name, props.each.url);
  }
  return props.each ? (
    <section>
      <div className="donationCard">
        <img
          src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=931&q=80"
          alt="test"
        ></img>
        <div className="busCard-details">
          <h2>{date}</h2>
          <p>{description} (desc)</p>
          <br />
          <div className="bus-bottom-row">
            <p>QTY: {quantity}</p>
            <p>{status}(status)</p>
          </div>
        </div>
      </div>
    </section>
  ) : null;
  //END DONATIONCARD
};

export default DonationCard;
