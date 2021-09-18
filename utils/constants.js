export const MOVIE_ERROR_TYPES = {
  NOT_FOUND: "Movie not found!",
};

export const LOCAL_STORAGE_TYPES = {
  FAVOURITES: "favourite-movies",
};

export const RATING_ICON_KEYS = {
  ROTTEN_TOMATOES: "Rotten Tomatoes",
  METACRITIC: "Metacritic",
  IMDB: "Internet Movie Database",
};

export const PAGE_URL_LIST = {
  MOVIES: "/movies/:id:",
  getMovieUrlById(movieId) {
    return this.MOVIES.replace(":id:", movieId);
  },
  HOME: "/",
  FAVOURITES: "/movies/favourites",
};
