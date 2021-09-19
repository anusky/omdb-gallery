import { bool, func, number } from "prop-types";

const PaginationNumberButton = ({ active, handleOnPageChange, pageToJump }) => {
  const className = `omdb-pagination-number ${
    active
      ? "bg-omdb-gray-light-2 cursor-auto"
      : "bg-white hover:bg-omdb-gray-light-2"
  }`;
  const handleOnClick = () => {
    !active && handleOnPageChange(pageToJump);
  };
  return (
    <button
      data-testid="pagination-number-button"
      onClick={handleOnClick}
      className={className}
    >
      {pageToJump}
    </button>
  );
};
export default PaginationNumberButton;
PaginationNumberButton.propTypes = {
  active: bool,
  pageToJump: number,
  handleOnPageChange: func.isRequired,
};
PaginationNumberButton.defaultProps = {
  active: false,
};
