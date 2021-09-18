import { string } from "prop-types";
import { useEffect, useState } from "react";
import {
  addFavouriteMovie,
  checkMovieIsAlreadyFavouriteById,
  removeFavouriteMovieById,
} from "../../utils/favourites";
import { Heart, SadFace } from "../Icons";

const AddToFavourites = ({ className, title, plot, poster, imdbID }) => {
  const [movieIsAdded, setMovieAdded] = useState(false);

  useEffect(() => {
    if (checkMovieIsAlreadyFavouriteById(imdbID)) {
      setMovieAdded(true);
    }
  }, [imdbID]);

  const handleFavouriteMovie = (event) => {
    event.preventDefault();
    if (!movieIsAdded) {
      addFavouriteMovie({ title, plot, poster, imdbID });
      setMovieAdded(true);
    } else {
      removeFavouriteMovieById(imdbID);
      setMovieAdded(false);
    }
  };

  return (
    <button
      data-testid="add-favourites-component"
      onClick={handleFavouriteMovie}
      className={`add-to-fav-button omdb-button ${className}`}
    >
      <span>{movieIsAdded ? "Remove" : "Add"}</span>
      <div
        className={`add-to-fav-icon grid grid-flow-col place-items-center ${
          movieIsAdded ? "active" : ""
        }`}
      >
        {movieIsAdded ? <SadFace /> : <Heart />}
      </div>
    </button>
  );
};

export default AddToFavourites;
AddToFavourites.propTypes = {
  className: string,
  title: string,
  plot: string,
  poster: string,
  imdbID: string,
};

AddToFavourites.defaultProps = {
  className: "",
};
