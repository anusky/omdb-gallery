import { string } from "prop-types";

export const TitleDescriptionPair = ({ title, description }) => {
  return (
    <div
      data-testid="title-desc-component"
      className="grid grid-flow-col w-fit-content gap-x-2"
    >
      {title && <span className="font-bold">{title}</span>}
      {description && (
        <span className="text-omdb-gray-medium font-normal">{description}</span>
      )}
    </div>
  );
};

TitleDescriptionPair.propTypes = {
  title: string,
  description: string.isRequired,
};
