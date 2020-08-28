import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovieCredits } from "../../api/tmdb-api";


export default ({ movie }) => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getMovieCredits(movie.id).then(credits => {
      setCredits(credits);
    });
  });
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Character</th>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
        {credits.map(r => {
            return (
              <tr key={r.id}>
                <td>{r.character}</td>
                <td>
                {" "}
                  <Link
                    to={{
                      pathname: `/cast/${r.id}`,
                      state: {
                        cast: r,
                        name : movie
                      }
                    }}
                    >
                      {r.name}
                      </Link>
                      </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};