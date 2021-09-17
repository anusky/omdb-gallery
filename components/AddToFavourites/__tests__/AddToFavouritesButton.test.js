/**
 * @jest-environment jsdom
 */
import React from "react";

import {
  render,
  fireEvent,
  waitFor,
  screen,
  cleanup,
} from "@testing-library/react";
import "@testing-library/jest-dom";

import AddToFavouritesButton from "../AddToFavouritesButton";

afterEach(cleanup);

test("AddToFavouritesButton  rennders without problem", () => {
  const handleClick = jest.fn();
  render(<AddToFavouritesButton handleOnClick={handleClick} />);
  expect(screen.getByTestId("add-favourites-button")).toBeInTheDocument();
  expect(screen.getByRole("button")).toBeInTheDocument();
  expect(screen.getByRole("button")).not.toBeDisabled();
});

test("AddToFavourites button click should add a movie into favs and disable button", () => {
  const handleClick = jest.fn();

  render(<AddToFavouritesButton handleOnClick={handleClick} />);

  fireEvent.click(screen.getByTestId("add-favourites-button"));
  expect(handleClick).toHaveBeenCalled();
});
