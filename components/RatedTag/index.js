import { string } from "prop-types";

export const RatedTag = ({ rated }) => {
  return (
    rated && (
      <div data-testid="rated-tag" className="bg-blue-600 text-white pill">
        {rated}
      </div>
    )
  );
};

RatedTag.propTypes = {
  rated: string,
};
