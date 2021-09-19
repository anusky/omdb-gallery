import { func, number } from "prop-types";

import { useEffect, useState } from "react";
const PaginationInsertPageInput = ({
  handlePageChange,
  currentPage,
  maxPages,
}) => {
  const [formVisible, setFormVisibility] = useState(false);
  const handleFormVisibility = () => setFormVisibility(!formVisible);
  return !formVisible ? (
    <button
      data-testid="pagination-insert-page-button"
      onClick={handleFormVisibility}
      className="relative inline-flex items-center px-2 py-2  border border-gray-300 bg-white text-sm font-medium text-g4m-gray-dark-2 hover:bg-gray-50 select-none"
    >
      ...
    </button>
  ) : (
    <form
      data-testid="pagination-insert-page-input-form"
      className="inline-flex border border-gray-300 bg-white text-sm font-medium text-g4m-gray-dark-2 hover:bg-gray-50 select-none"
      onSubmit={(event) => {
        event.preventDefault();
        handlePageChange(Number(event.target.insertedPage.value));
        handleFormVisibility();
      }}
    >
      <label
        htmlFor="insertedPage"
        className="bg-white text-sm font-medium text-g4m-gray-dark-2 px-2 py-2 w-full"
      >
        Insert page number:
      </label>

      <input
        id="insertedPage"
        data-testid="pagination-insert-page-input"
        type="number"
        name="insertedPage"
        required
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder={currentPage}
        min="1"
        max={maxPages}
      />
      <button name="submit" type="submit"></button>
    </form>
  );
};
export default PaginationInsertPageInput;
PaginationInsertPageInput.propTypes = {
  handlePageChange: func.isRequired,
  currentPage: number.isRequired,
  maxPages: number.isRequired,
};
PaginationInsertPageInput.defaultProps = {};
