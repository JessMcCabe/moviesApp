import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";

const CastHeader = ({ cast }) => {
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <h2>
          {cast.name}
          {"  "}
          <a href={"/"}>
            <FontAwesomeIcon icon={["fas", "home"]} size="1x" />
          </a>
        </h2>
      </div>
    </div>
  );
};

export default CastHeader;