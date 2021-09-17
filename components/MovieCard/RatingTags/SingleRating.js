import { Imdb, Metacritic, RottenTomatoes } from "@/components/Icons";

import { shape, string } from "prop-types";
import { RATING_ICON_KEYS } from "../../../utils/constants";

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
    <div
      data-testid="single-rating-component"
      className="grid grid-flow-col w-fit-content gap-x-1"
    >
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

export default SingleRating;
