import React from "react";
import "./castDetails.css";

export default ({ cast }) => {
  return (
    <>
      <h4>Biography</h4>
      <p>{cast.biography}</p>
    </>
  );
};