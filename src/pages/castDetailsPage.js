import React, {useState, useEffect}  from "react";
import CastHeader from "../components/headerCast";
import CastDetails from "../components/castDetails";
import "./castPage.css";
import { getCastMember } from "../api/tmdb-api";
import { Link, Route, withRouter } from "react-router-dom";
import PersonCredits from "../components/personCredits";

const CastPage = props => {
  const { id } = props.match.params;
  const [cast, setCast] = useState(null);
  useEffect(() => {
    getCastMember(id).then(cast => {
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
          <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/cast") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/cast/${id}/movie_credits`}
              >
                Show Movie Credits 
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/cast/${id}`}
              >
                Hide Movie Credits
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/cast/:id/movie_credits`}
          render={props => <PersonCredits cast={cast} {...props} />}
        />
      </>
        ) : (
        <p>Waiting for cast details</p>
      )}
    </>
  );
};

export default CastPage;