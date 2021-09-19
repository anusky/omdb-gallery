/**
 * @jest-environment jsdom
 */
import React from "react";

import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import PaginationInsertPageInput from "../pagination-insert-page-input";

afterEach(cleanup);

test("PaginationInsertPageInput renders with no problem", () => {
  const handlePageChange = jest.fn();
  render(
    <PaginationInsertPageInput
      handlePageChange={handlePageChange}
      currentPage={1}
      maxPages={100}
    />
  );
  expect(
    screen.getByTestId("pagination-insert-page-button")
  ).toBeInTheDocument();
});

test("PaginationInsertPageInput button should show form to insert page manually", () => {
  const handlePageChange = jest.fn();
  render(
    <PaginationInsertPageInput
      handlePageChange={handlePageChange}
      currentPage={1}
      maxPages={100}
    />
  );
  fireEvent.click(screen.getByText("..."));
  expect(
    screen.queryByTestId("pagination-insert-page-button")
  ).not.toBeInTheDocument();

  expect(
    screen.queryByTestId("pagination-insert-page-input-form")
  ).toBeInTheDocument();
});
