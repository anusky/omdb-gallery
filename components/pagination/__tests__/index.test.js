/**
 * @jest-environment jsdom
 */
import React from "react";

import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Pagination from "..";
import "@testing-library/dom";

afterEach(cleanup);

test("Pagination renders with no problems ", () => {
  render(<Pagination />);
  expect(screen.getByTestId("pagination-component")).toBeInTheDocument();
});

test("Pagination initially should tell  `Showing 1 to 10 of X results` according to props", () => {
  render(<Pagination maxItems={100} itemsPerPage={10} currentPage={1} />);
  expect(screen.getByTestId("pagination-results-shown-from")).toHaveTextContent(
    "1"
  );
  expect(screen.getByTestId("pagination-results-shown-to")).toHaveTextContent(
    "10"
  );
  expect(
    screen.getByTestId("pagination-results-shown-total")
  ).toHaveTextContent("100");
});

test("Pagination previous page button should call handlePageChange when currentPage is higher than 1", () => {
  const handlePageChange = jest.fn();
  render(
    <Pagination
      handlePageChange={handlePageChange}
      maxItems={100}
      itemsPerPage={10}
      currentPage={2}
    />
  );

  fireEvent.click(screen.getByTestId("pagination-previous-page-button"));
  expect(handlePageChange).toHaveBeenCalledTimes(1);
});

test("Pagination previous page button should not call handlePageChange when currentPage is 1", () => {
  const handlePageChange = jest.fn();
  render(
    <Pagination
      handlePageChange={handlePageChange}
      maxItems={100}
      itemsPerPage={10}
      currentPage={1}
    />
  );

  fireEvent.click(screen.getByTestId("pagination-previous-page-button"));
  expect(handlePageChange).toHaveBeenCalledTimes(0);
});

test("Pagination next page button should not call handlePageChange when currentPage is equal to last page", () => {
  const handlePageChange = jest.fn();
  render(
    <Pagination
      handlePageChange={handlePageChange}
      maxItems={100}
      itemsPerPage={10}
      currentPage={10}
    />
  );

  fireEvent.click(screen.getByTestId("pagination-next-page-button"));
  expect(handlePageChange).toHaveBeenCalledTimes(0);
});

test("Pagination next page button should call handlePageChange when currentPage is not last page", () => {
  const handlePageChange = jest.fn();
  render(
    <Pagination
      handlePageChange={handlePageChange}
      maxItems={100}
      itemsPerPage={10}
      currentPage={1}
    />
  );

  fireEvent.click(screen.getByTestId("pagination-next-page-button"));
  expect(handlePageChange).toHaveBeenCalledTimes(1);
});
