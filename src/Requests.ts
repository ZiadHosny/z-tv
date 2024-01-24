const key = process.env.REACT_APP_IMDB_API_KEY;

const MOVIE_ROOT_URL = 'https://api.themoviedb.org/3/movie'

export const requests = {
  requestPopular: `${MOVIE_ROOT_URL}/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `${MOVIE_ROOT_URL}/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `${MOVIE_ROOT_URL}/popular?api_key=${key}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `${MOVIE_ROOT_URL}/upcoming?api_key=${key}&language=en-US&page=1`,
};
