import React, { useEffect } from "react";

const HOME = () => {
  const openOrders = [];
  // const openOrders = 0;

  return (
    <section className="homePage-container">
      <div className="homePage-content">
        <h2>HOME PAGE</h2>
        <div className="business-info">
          <h2>BusinessName</h2>
          <p>Location</p>
          <p>#Donations</p>
          <p>Rating</p>
        </div>
        <div className="business-current-offers">
          Current Open Orders:
          {openOrders == 0 ? <p>No Open Orders</p> : <p>{openOrders}</p>}
          {/* <DonationCard /> */}
        </div>
      </div>
    </section>
  );
};

export default HOME;
