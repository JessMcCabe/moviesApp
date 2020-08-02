import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPersonMovieCredits } from "../../api/tmdb-api";



export default ({ cast }) => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getPersonMovieCredits(cast.id).then(credits => {
      setCredits(credits);
    });
  }, []);
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Character</th>
          <th scope="col">Title</th>
        </tr>
      </thead>
      <tbody>
        {credits.map(r => {
            return (
              <tr key={r.id}>
                <td>{r.character}</td>
                <td>{r.title}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};