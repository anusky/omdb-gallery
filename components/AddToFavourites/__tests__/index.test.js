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

import { favouriteMovie } from "../../../utils/__tests__/__fixtures__/favouriteMovie";
import AddToFavourites from "..";

afterEach(cleanup);

test("AddToFavourites ", () => {
  render(
    <AddToFavourites
      title={favouriteMovie.title}
      plot={favouriteMovie.plot}
      poster={favouriteMovie.poster}
      imdbID={favouriteMovie.imdbID}
    />
  );
  expect(screen.getByTestId("add-favourites-component")).toBeInTheDocument();
  expect(screen.getByRole("button")).toBeInTheDocument();
  expect(screen.getByRole("button")).not.toBeDisabled();
});
