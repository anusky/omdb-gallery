/**
 * @jest-environment jsdom
 */
import React from "react";

import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import FavouriteMoviesList from "..";

afterEach(cleanup);

test("Moviecard renders with no problems when movie contains all data", () => {
  render(<FavouriteMoviesList />);
  expect(screen.getByTestId("fav-list-component")).toBeInTheDocument();
});

test("Moviecard should render an empty advise and go home link if no favList is provided", () => {
  render(<FavouriteMoviesList />);
  expect(screen.getByTestId("fav-list-empty")).toBeInTheDocument();
  expect(
    screen.getByText("Ooops seems you still have no added favouties movies.")
  ).toBeInTheDocument();
  expect(
    screen.getByText("Maybe can go back home and find some to add.")
  ).toBeInTheDocument();

  expect(screen.getByText("Go Home")).toBeInTheDocument();
});
