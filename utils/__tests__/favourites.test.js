import {
  getFavouriteMoviesList,
  addFavouriteMovie,
  checkMovieIsAlreadyFavouriteById,
  removeFavouriteMovieById,
} from "../favourites";
import { LOCAL_STORAGE_TYPES } from "../constants";
import {
  favouriteMovie,
  favouriteMovieStringified,
} from "./__fixtures__/favouriteMovie";

describe("getFavouriteMoviesList functionality", () => {
  it("initially localStorage should not contain any favs", () => {
    expect(window.localStorage.getItem(LOCAL_STORAGE_TYPES.FAVOURITES)).toBe(
      null
    );
  });
  it("getFavouriteMoviesList should return an array when there is no favs stored in localStorage", () => {
    expect(getFavouriteMoviesList()).toBeInstanceOf(Array);
  });
});
describe("addFavouriteMovie functionality", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });
  it("addFavouriteMovie Should not add anything if no data is sent", () => {
    addFavouriteMovie();
    expect(window.localStorage.getItem(LOCAL_STORAGE_TYPES.FAVOURITES)).toBe(
      null
    );
  });
  it("addFavouriteMovie Should not add anything if empty data", () => {
    addFavouriteMovie({});
    expect(window.localStorage.getItem(LOCAL_STORAGE_TYPES.FAVOURITES)).toBe(
      null
    );
  });
  it("addFavouriteMovie Should not add anything if no `title` is sent", () => {
    addFavouriteMovie({ ...favouriteMovie, title: undefined });
    expect(window.localStorage.getItem(LOCAL_STORAGE_TYPES.FAVOURITES)).toBe(
      null
    );
  });

  it("addFavouriteMovie Should not add anything if no `poster` is sent", () => {
    addFavouriteMovie({ ...favouriteMovie, poster: undefined });
    expect(window.localStorage.getItem(LOCAL_STORAGE_TYPES.FAVOURITES)).toBe(
      null
    );
  });

  it("addFavouriteMovie Should not add anything if no `imdbID` is sent", () => {
    addFavouriteMovie({ ...favouriteMovie, imdbID: undefined });
    expect(window.localStorage.getItem(LOCAL_STORAGE_TYPES.FAVOURITES)).toBe(
      null
    );
  });

  it("addFavouriteMovie Should not add anything if `title` is empty", () => {
    addFavouriteMovie({ ...favouriteMovie, title: "" });
    expect(window.localStorage.getItem(LOCAL_STORAGE_TYPES.FAVOURITES)).toBe(
      null
    );
  });

  it("addFavouriteMovie Should not add anything if `imdbID` is empty", () => {
    addFavouriteMovie({ ...favouriteMovie, imdbID: "" });
    expect(window.localStorage.getItem(LOCAL_STORAGE_TYPES.FAVOURITES)).toBe(
      null
    );
  });

  it("addFavouriteMovie Should  add movie if has correct title and imbdID ", () => {
    // from fixture/favouriteMovie
    addFavouriteMovie({ ...favouriteMovie });
    expect(window.localStorage.getItem(LOCAL_STORAGE_TYPES.FAVOURITES)).toEqual(
      favouriteMovieStringified
    );
  });
});

describe("checkMovieIsAlreadyFavouriteById functionality", () => {
  beforeAll(() => {
    /**
     * We ensure localStorage has a fav movie added - imdbID = tt0102164
     */
    addFavouriteMovie({ ...favouriteMovie });
  });
  afterAll(() => {
    window.localStorage.clear();
  });
  it("checkMovieIsAlreadyFavouriteById should return true if a movie is already in favs ", () => {
    const movieExists = checkMovieIsAlreadyFavouriteById(favouriteMovie.imdbID);
    expect(movieExists).toBeTruthy();
  });
  it("checkMovieIsAlreadyFavouriteById should return false if no movie id is given ", () => {
    const movieExists = checkMovieIsAlreadyFavouriteById();
    expect(movieExists).toBeFalsy();
  });
  it("checkMovieIsAlreadyFavouriteById should return false if empty movie id is given ", () => {
    const movieExists = checkMovieIsAlreadyFavouriteById("");
    expect(movieExists).toBeFalsy();
  });
  it("checkMovieIsAlreadyFavouriteById should return false if movie is not in favs ", () => {
    const movieExists = checkMovieIsAlreadyFavouriteById("example");
    expect(movieExists).toBeFalsy();
  });
});

describe("removeFavouriteMovieById functionality", () => {
  beforeAll(() => {
    /**
     * We ensure localStorage has a fav movie added - imdbID = tt0102164
     */
    addFavouriteMovie({ ...favouriteMovie });
  });
  it("removeFavouriteMovieById should remove a movie from favs", () => {
    removeFavouriteMovieById(favouriteMovie.imdbID);
    const movieExists = checkMovieIsAlreadyFavouriteById(favouriteMovie.imdbID);
    expect(movieExists).toBeFalsy();
  });
});
