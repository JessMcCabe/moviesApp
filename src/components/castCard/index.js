import React from "react";
import "./castCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";

const CastCard = props => {
  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
        <img
          className="card-img-tag center "
          alt={props.cast.name}
          src={
            props.cast.profile_path
              ? `https://image.tmdb.org/t/p/w500/${props.cast.profile_path}`
              : "./film-poster-placeholder.png"
          }
        />
        <div className="card-body">
          <h4 className="card-title ">{props.cast.name}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span> {props.cast.birthday}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CastCard ;