import { isEmpty } from "lodash";

const OMDB_API_SEARCH_URL = `https://omdbapi.com/?s=:searchParams:&page=:page:&apikey=:apikey:`;
const API_MOVIE_URL = `https://omdbapi.com/?i=:movieId:&plot=full&apikey=:apikey:`;
const OMDB_API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;

const API_SEARCH_URL = `/api/movies/search/?id=:id:&page=:page:`;

export const getSearchUrl = (searchParams = "", page = 1) => {
  return OMDB_API_SEARCH_URL.replace(":searchParams:", searchParams)
    .replace(":page:", page)
    .replace(":apikey:", OMDB_API_KEY);
};

export const getMovieUrl = (movieId = "") => {
  return API_MOVIE_URL.replace(":movieId:", movieId).replace(
    ":apikey:",
    OMDB_API_KEY
  );
};

export const getSearchApi = (id, page) => {
  if (isEmpty(id) || isEmpty(page)) {
    return null;
  }
  return API_SEARCH_URL.replace(":id:", id).replace(":page:", page);
};
