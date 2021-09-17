import { LOCAL_STORAGE_TYPES } from "./constants";
import { isEmpty } from "./generics";
const checkLocalStorageExists = () => window?.localStorage;

const getLocalStorageItemByKey = (itemKey) => {
  if (checkLocalStorageExists()) {
    const dataToParse = window.localStorage.getItem(itemKey);
    return (
      (dataToParse !== null &&
        JSON.parse(window.localStorage.getItem(itemKey))) ||
      []
    );
  }
};

const setLocalStorageItemByKey = (itemKey) => (data) => {
  console.log("itemKey ", itemKey);
  checkLocalStorageExists() &&
    window.localStorage.setItem(itemKey, JSON.stringify(data));
};

const setFavouriteMoviesList = setLocalStorageItemByKey(
  LOCAL_STORAGE_TYPES.FAVOURITES
);

/**
 * @function addFavouriteMovie
 * @param {Object} movieInfo
 */
export const addFavouriteMovie = (movieInfo = {}) => {
  const { title, poster, imdbID } = movieInfo;
  if (isEmpty(title) || !poster || isEmpty(imdbID)) {
    console.log(
      'movieInfo object should contain "title, poster, plot and imdbID". Received: ',
      { movieInfo }
    );
    return;
  }

  const currentFavList = getLocalStorageItemByKey(
    LOCAL_STORAGE_TYPES.FAVOURITES
  );
  setFavouriteMoviesList([...currentFavList, movieInfo]);
};

export const getFavouriteMoviesList = () =>
  getLocalStorageItemByKey(LOCAL_STORAGE_TYPES.FAVOURITES);

export const checkMovieIsAlreadyFavouriteById = (movieImdbID) =>
  getFavouriteMoviesList().find((movie) => movie.imdbID === movieImdbID);

/**
 * @function addFavouriteMovie
 * @param {Object} movieInfo
 */
export const removeFavouriteMovieById = (movieImdbID) => {
  const favMoviesFiltered = getFavouriteMoviesList().filter(
    (movie) => movie.imdbID !== movieImdbID
  );
  setFavouriteMoviesList(favMoviesFiltered);
};
