import { bool } from "prop-types";
import { func } from "prop-types";
import { Heart } from "../Icons";

const AddToFavouritesButton = ({ handleOnClick, active }) => {
  return (
    <button
      data-testid="add-favourites-button"
      onClick={handleOnClick}
      className={`grid place-items-center ${
        active
          ? "text-red-700 hover:text-gray-500"
          : "text-gray-500 hover:text-red-700"
      }`}
    >
      <Heart />
    </button>
  );
};

export default AddToFavouritesButton;
AddToFavouritesButton.propTypes = {
  handleOnClick: func.isRequired,
  active: bool,
};
AddToFavouritesButton.defaultProps = {
  active: false,
};
