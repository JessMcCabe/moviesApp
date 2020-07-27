import React from "react";

export default ({ credit }) => {
  return (
    <>
      <p>Character {credit.cast.character} </p>
      <p>{credit.cast.name} </p>
    </>
  );
};