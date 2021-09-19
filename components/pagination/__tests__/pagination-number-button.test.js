/**
 * @jest-environment jsdom
 */
import React from "react";

import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import PaginationNumberButton from "../pagination-number-button";

afterEach(cleanup);

test("PaginationNumberButton renders with no problem", () => {
  const handleOnPageChange = jest.fn();
  render(<PaginationNumberButton handleOnPageChange={handleOnPageChange} />);
  expect(screen.getByTestId("pagination-number-button")).toBeInTheDocument();
});

test("PaginationNumberButton button should be called with pageToJump prop", () => {
  const handleOnPageChange = jest.fn();
  render(
    <PaginationNumberButton
      handleOnPageChange={handleOnPageChange}
      pageToJump={2}
    />
  );
  fireEvent.click(screen.getByText(2));
  expect(handleOnPageChange).toHaveBeenCalledTimes(1);
  expect(handleOnPageChange).toHaveBeenCalledWith(2);
});

test("PaginationNumberButton button should not trigger handleOnPageChange when is active", () => {
  const handleOnPageChange = jest.fn();
  render(
    <PaginationNumberButton
      handleOnPageChange={handleOnPageChange}
      pageToJump={3}
      active={true}
    />
  );
  fireEvent.click(screen.getByText(3));
  expect(handleOnPageChange).toHaveBeenCalledTimes(0);
});
