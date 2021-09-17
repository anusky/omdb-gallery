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
