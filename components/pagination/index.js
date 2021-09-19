import { RESULTS_PER_PAGE } from "@/utils/constants";
import { number } from "prop-types";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "../Icons";
import PaginationInsertPageInput from "./pagination-insert-page-input";
import PaginationNumberButton from "./pagination-number-button";

const Pagination = ({
  itemsPerPage,
  maxItems,
  currentPage,
  handlePageChange,
}) => {
  const [maxPages, setMaxPages] = useState(0);
  const [[firstPagesArray, secondPagesArray], setPagesArray] = useState([
    [],
    [],
  ]);
  const resultsShownFrom =
      currentPage === 1 ? currentPage : (currentPage - 1) * itemsPerPage + 1,
    resultsShownTo = currentPage * itemsPerPage;

  useEffect(() => {
    if (itemsPerPage > 0) {
      const maxPages = Math.ceil(maxItems / itemsPerPage);
      console.log("itemsPerPage ", itemsPerPage);
      console.log("maxItems ", maxItems);
      console.log("maxPages ", maxPages);
      setMaxPages(maxPages);
      if (maxPages > 6) {
        setPagesArray([Array(3).fill(0), Array(3).fill(0)]);
      } else {
        setPagesArray([Array(maxPages).fill(0), []]);
      }
    }
  }, [itemsPerPage, maxItems]);

  const handlePrevious = () => {
    currentPage > 1 && handlePageChange(currentPage - 1);
  };
  const handleNext = () => {
    currentPage < maxPages && handlePageChange(currentPage + 1);
  };

  return (
    <div
      data-testid="pagination-component"
      className="bg-white  hidden sm:flex-1 sm:flex sm:items-center sm:justify-between border-t border-gray-200  text-g4m-gray-dark-2 py-4"
    >
      <div>
        <p className="text-omdb-gray-dark-2 grid grid-flow-col gap-x-1">
          <span className="sr-only">{`Showing ${resultsShownFrom} to ${resultsShownTo} of ${maxItems} results`}</span>
          Showing
          <span
            data-testid="pagination-results-shown-from"
            className="font-medium"
          >
            {resultsShownFrom}
          </span>
          to
          <span
            data-testid="pagination-results-shown-to"
            className="font-medium"
          >
            {resultsShownTo}
          </span>
          of
          <span
            data-testid="pagination-results-shown-total"
            className="font-medium"
          >
            {maxItems}
          </span>
          results
        </p>
      </div>
      <nav
        className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
        aria-label="Pagination"
      >
        <button
          data-testid="pagination-previous-page-button"
          onClick={handlePrevious}
          className="omdb-pagination-single__prev"
          disabled={currentPage <= 1}
        >
          <span className="sr-only">{"previous"}</span>
          <ChevronLeft />
        </button>
        {firstPagesArray.map((el, index) => {
          const currentIndex = index + 1;

          return (
            <PaginationNumberButton
              key={index}
              handleOnPageChange={handlePageChange}
              active={currentIndex === currentPage}
              pageToJump={currentIndex}
            />
          );
        })}
        {secondPagesArray.length > 0 && (
          <PaginationInsertPageInput
            handlePageChange={handlePageChange}
            maxPages={maxPages}
            currentPage={currentPage}
          />
        )}
        {secondPagesArray.map((el, index, currArray) => {
          const currentIndex = maxPages - currArray.length + index + 1;
          return (
            <PaginationNumberButton
              key={index}
              handleOnPageChange={handlePageChange}
              active={currentIndex === currentPage}
              pageToJump={currentIndex}
            />
          );
        })}

        <button
          onClick={handleNext}
          data-testid="pagination-next-page-button"
          className="omdb-pagination-single__next"
          disabled={currentPage >= maxPages}
        >
          <span className="sr-only">{"next"}</span>
          <ChevronRight />
        </button>
      </nav>
    </div>
  );
};
export default Pagination;
Pagination.propTypes = {
  itemsPerPage: number,
  maxItems: number,
  page: number,
};
Pagination.defaultProps = {
  itemsPerPage: RESULTS_PER_PAGE,
  maxItems: 1,
  page: 1,
};
