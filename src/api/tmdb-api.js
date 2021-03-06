export const getMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
  )
    .then(res => res.json())
    .then(json => json.results);
};

export const getMovie = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then(res => res.json());
};

export const getGenres = () => {
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
      process.env.REACT_APP_TMDB_KEY +
      "&language=en-US"
  )
    .then(res => res.json())
    .then(json => json.genres);
};

export const getMovieReviews = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then(res => res.json())
    .then(json => json.results);
};

//Adding Credits of a Movie - API Call to retreive credits
export const getMovieCredits = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then(res => res.json())
    .then(json => json.cast);
};


//Adding Cast Member Details - API Call to retreive Person
export const getCastMember = id => {
  return fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then(res => res.json());
};

//Adding Person Movie Details - API Call to retreive Person Movie Credit Details
export const getPersonMovieCredits= id => {
  return fetch(
    `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
    .then(res => res.json())
    .then(json => json.cast);
};