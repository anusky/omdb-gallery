import { TitleDescriptionPair } from "../MovieCard/TitleDescriptionPair";
import PosterImage from "../PosterImage";

import AddToFavourites from "../AddToFavourites";
import MovieLink from "../MovieLink";

const FavouriteMovieCard = (props) => {
  return (
    <div
      data-testid="favourite-movie-card"
      className="grid w-fit-content rounded-lg overflow-hidden bg-gray-100 gap-y-8"
    >
      <div className="grid place-items-center py-4 relative gap-y-4">
        <h1>{props.title}</h1>
        <PosterImage
          className="h-64 w-full"
          Poster={props.poster}
          Title={props.title}
        />
      </div>
      <div className="grid grid-flow-col bg-gray-200 justify-around  place-items-center py-3 px-2 gap-x-4">
        <MovieLink imdbID={props.imdbID} />
        <AddToFavourites {...props} />
      </div>
    </div>
  );
};
export default FavouriteMovieCard;
