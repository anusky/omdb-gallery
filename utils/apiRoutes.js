const API_SEARCH_URL = `https://omdbapi.com/?s=:searchParams:&page=:page:&apikey=:apikey:`;
const API_MOVIE_URL = `https://omdbapi.com/?i=:movieId:&apikey=:apikey:`;
const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;

export const getSearchUrl = (searchParams = "", page = 1) => {
  return API_SEARCH_URL.replace(":searchParams:", searchParams)
    .replace(":page:", page)
    .replace(":apikey:", API_KEY);
};

export const getMovieUrl = (movieId = "") => {
  return API_MOVIE_URL.replace(":movieId:", movieId).replace(
    ":apikey:",
    API_KEY
  );
};
