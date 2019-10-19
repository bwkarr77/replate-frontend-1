import React, { useEffect } from "react";
import axios from "axios";

const HOME = () => {
  //   useEffect(() => {
  //     axios
  //       .get("https://pokeapi.co/api/v2/") //replace with our API when it is known
  //       .then(results => {
  //         console.log(results);
  //       })
  //       .catch(err => console.log(err));
  //   }, []);

  return (
    <div className="homePage">
      <h2>HOME PAGE</h2>
    </div>
  );
};

export default HOME;
