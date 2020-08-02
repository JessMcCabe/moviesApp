import React, {useState, useEffect}  from "react";
import CastHeader from "../components/headerCast";
import CastDetails from "../components/castDetails";
import "./castPage.css";
import { getCastMember } from "../api/tmdb-api";

const CastPage = props => {
  const { id } = props.match.params;
  const [cast, setCast] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then(res => res.json())    
    .then(cast => {
      setCast(cast);
    });
  }, [id]);
  return (
    <>
      {cast ? (
        <>
          <CastHeader cast={cast} />
          <div className="row">
            <div className="col-3">
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : "./film-poster-placeholder.png"
                }
                className="movie"
                alt={cast.name}
              />
            </div>
            <div className="col-9">
              <CastDetails cast={cast} />
            </div>
          </div>
        </>
        ) : (
        <p>Waiting for cast details</p>
      )}
    </>
  );
};

export default CastPage;