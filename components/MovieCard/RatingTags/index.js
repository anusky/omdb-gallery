import { isEmpty } from "../../../utils/generics";

import { array } from "prop-types";

import SingleRating from "./SingleRating";

export const RatingTags = ({ ratingList }) => {
  return (
    ratingList &&
    !isEmpty(ratingList) && (
      <div
        data-testid="rating-component"
        className="grid grid-flow-col gap-x-4"
      >
        <span className="font-bold">Ratings:</span>
        {ratingList.map((rating, index) => (
          <SingleRating key={index} rating={rating} />
        ))}
      </div>
    )
  );
};

RatingTags.propTypes = {
  ratingList: array.isRequired,
};
