import { string } from "prop-types";

import { RatedTag } from "../RatedTag";
import { TitleDescriptionPair } from "./TitleDescriptionPair";

import AddToFavourites from "../AddToFavourites";
import { isEmpty } from "../../utils/generics";
import { RatingTags } from "./RatingTags";
import PosterImage from "../PosterImage";
import { IMDBTag } from "../IMBDTag";
import Genres from "./Genres";

const MovieCard = (props) => {
  const {
    Title,
    Year,
    Genre,
    Released,
    Runtime,
    Poster,
    Rated,
    Director,
    Writer,
    Awards,
    Plot,
    Country,
    Ratings,
    Actors,
    Production,
    imdbID,
  } = props;
  const titleAndYear = `${Title} (${Year}) `;
  return (
    <div
      data-testid="moviecard-component"
      className="grid rounded-lg overflow-hidden bg-gray-50 gap-y-7"
    >
      <div className="lg:p-4 grid gap-y-8 lg:gap-y-0 lg:grid-cols-3">
        <div className="bg-gray-100 lg:bg-transparent p-4 lg:p-0 grid order-2 lg:order-1 lg:col-span-2 lg:col-start-1 gap-y-3">
          <div className="inline-flex place-items-center gap-x-2">
            <h1>
              {titleAndYear}
              <span className="text-omdb-gray-light">[{Runtime}]</span>
            </h1>
            <IMDBTag />
            <RatedTag rated={Rated} />
          </div>

          <Genres genres={Genre} />
          <div className="grid grid-flow-col gap-x-2 w-fit-content ">
            <span className="movie-info">Released: {Released}</span>
          </div>
          <div className="grid grid-flow-col w-fit-content place-items-center gap-x-2">
            <RatingTags ratingList={Ratings} />
          </div>

          <TitleDescriptionPair title="Country:" description={Country} />
          <TitleDescriptionPair title="Director:" description={Director} />
          <TitleDescriptionPair title="Writer:" description={Writer} />
          <TitleDescriptionPair title="Actors:" description={Actors} />
          <TitleDescriptionPair title="Awards:" description={Awards} />
          <TitleDescriptionPair title="Production:" description={Production} />
        </div>
        <PosterImage
          className="h-96 w-full lg:h-auto lg:w-auto order-1 lg:order-2 lg:row-start-auto lg:col-span-1"
          Poster={Poster}
          Title={Title}
        />
        <AddToFavourites
          className="lg:order-3 lg:col-start-3 "
          title={Title}
          poster={Poster}
          plot={Plot}
          imdbID={imdbID}
        />
      </div>
      {!isEmpty(Plot) && (
        <div
          data-testid="moviecard-plot"
          className="bg-gray-50 lg:bg-gray-100 p-4"
        >
          <h1 className="text-left">Plot</h1>
          <TitleDescriptionPair description={Plot} />
        </div>
      )}
    </div>
  );
};

export default MovieCard;
MovieCard.propTypes = {
  title: string,
  year: string,
  type: string,
  image: string,
};
MovieCard.defaultProps = {
  title: "",
  year: "",
  type: "",
};
