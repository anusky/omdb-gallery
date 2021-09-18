import { array } from "prop-types";
import FavouriteMovieCard from "./favourite-movie-card";

const FavouriteMoviesList = ({ favList }) => {
  return (
    <div data-testid="fav-list-component">
      {favList.map((movie, index) => (
        <FavouriteMovieCard key={index} {...movie} />
      ))}
    </div>
  );
};

export default FavouriteMoviesList;
FavouriteMoviesList.propTypes = {
  favList: array,
};
