import { string } from "prop-types";
import { useEffect, useState } from "react";
import {
  addFavouriteMovie,
  checkMovieIsAlreadyFavouriteById,
  removeFavouriteMovieById,
} from "../../utils/favourites";
import { Heart } from "../Icons";
import AddToFavouritesButton from "./AddToFavouritesButton";

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
    <div
      data-testid="add-favourites-component"
      className={`grid place-items-center p-4 gap-x-2 grid-flow-col w-fit-content justify-self-center rounded-b-lg bg-gray-100 ${className}`}
    >
      {movieIsAdded ? (
        <span className="font-medium text-gray-500">
          Remove From Favourites
        </span>
      ) : (
        <span className="font-medium">Add to Favourites</span>
      )}
      <AddToFavouritesButton
        handleOnClick={handleFavouriteMovie}
        active={movieIsAdded}
      />
    </div>
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
