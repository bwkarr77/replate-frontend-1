import React from "react";

const BusinessDetails = props => {
  console.log(props);
  let info = Object.keys(props);
  console.log("info", info);

  return (
    <div>
      <h2>BusinessDetails: {props.id}</h2>
    </div>
  );
};

export default BusinessDetails;
