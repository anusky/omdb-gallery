import { shape, string } from "prop-types";
import { array } from "prop-types";
import { arrayOf } from "prop-types";
import { Imdb, Metacritic, RottenTomatoes } from "../Icons";

const RATING_ICON_KEYS = {
  ROTTEN_TOMATOES: "Rotten Tomatoes",
  METACRITIC: "Metacritic",
  IMDB: "Internet Movie Database",
};

const getDynamicIcon = (iconName) => {
  switch (iconName) {
    case RATING_ICON_KEYS.ROTTEN_TOMATOES:
      return RottenTomatoes;
    case RATING_ICON_KEYS.METACRITIC:
      return Metacritic;
    case RATING_ICON_KEYS.IMDB:
      return Imdb;
    default:
      return null;
  }
};

const SingleRating = ({ rating }) => {
  const { Source, Value } = rating;
  const DynamicIcon = getDynamicIcon(Source);
  return (
    <div className="grid grid-flow-col w-fit-content gap-x-1">
      <DynamicIcon />
      <span className="movie-info">{Value}</span>
      <span className="sr-only">{Source}</span>
    </div>
  );
};

SingleRating.propTypes = {
  rating: shape({
    Source: string.isRequired,
    Value: string.isRequired,
  }),
};

export const RatingTags = ({ ratingList }) => {
  return (
    <div className="grid grid-flow-col gap-x-4">
      <span className="font-bold">Ratings:</span>
      {ratingList.map((rating, index) => (
        // <pre key={index}>{JSON.stringify(rating, null, 2)}</pre>
        <SingleRating key={index} rating={rating} />
      ))}
    </div>
  );
};

RatingTags.propTypes = {
  ratingList: array.isRequired,
};
