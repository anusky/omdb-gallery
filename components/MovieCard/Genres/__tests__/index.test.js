/**
 * @jest-environment jsdom
 */
import React from "react";

import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Genres from "..";
import { normalMovie } from "../../__tests__/__fixtures__/movieList";

afterEach(cleanup);

test("Genres renders with no problems ", () => {
  /**
   * "Action, Adventure"
   */
  render(<Genres genres={normalMovie.Genre} />);
  expect(screen.getByTestId("movie-genres-component")).toBeInTheDocument();
});

test("Genres should render 2 single genres ", async () => {
  /**
   * "Action, Adventure"
   */
  render(<Genres genres={normalMovie.Genre} />);
  const items = await screen.findAllByTestId("single-genre-component");
  expect(items).toHaveLength(2);
});
