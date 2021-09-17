import { number } from "prop-types";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "../Icons";

const Pagination = ({
  itemsPerPage,
  maxItems,
  currentPage,
  handlePageChange,
}) => {
  const [maxPages, setMaxPages] = useState(0);
  const [pagesArray, setPagesArray] = useState([]);

  useEffect(() => {
    if (itemsPerPage > 0) {
      const maxPages = Math.ceil(maxItems / itemsPerPage);
      setMaxPages(maxPages);
      setPagesArray(Array(maxPages).fill(0));
    }
  }, [itemsPerPage, maxItems]);

  const handlePrevious = () => {
    currentPage > 1 && handlePageChange(currentPage - 1);
  };
  const handleNext = () => {
    currentPage < maxPages && handlePageChange(currentPage + 1);
  };
  const handleOnPageChange = (page) => () => {
    handlePageChange(page);
  };

  return (
    <div className="bg-white  px-4 sm:px-6 md:px-16 py-3 flex items-center justify-between border-t border-gray-200  text-g4m-gray-dark-2">
      <nav
        className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px place-items-center"
        aria-label="Pagination"
      >
        <span className="mr-4">Current Page: {currentPage}</span>
        <button
          onClick={handlePrevious}
          className="relative inline-flex disabled:bg-g4m-gray-dark-3  disabled:text-white items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-g4m-gray-dark-2 hover:bg-gray-50 select-none"
          disabled={currentPage <= 1}
        >
          <span className="sr-only">{"previous"}</span>

          <ChevronLeft />
        </button>
        {/* {pagesArray.map((el, index) => {
          const className = `relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-g4m-gray-dark-2 select-none ${
            index + 1 === currentPage
              ? "bg-g4m-gray-default"
              : "bg-white hover:bg-g4m-gray-default"
          }`;
          return (
            <button
              key={index}
              onClick={handleOnPageChange(index + 1)}
              className={className}
            >
              {index + 1}
            </button>
          );
        })} */}

        <button
          onClick={handleNext}
          className="relative inline-flex disabled:bg-g4m-gray-dark-3 disabled:cursor-not-allowed  disabled:text-white items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-g4m-gray-dark-2 hover:bg-gray-50 select-none"
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
  itemsPerPage: 10,
  maxItems: 1,
  page: 1,
};
