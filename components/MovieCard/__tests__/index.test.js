/**
 * @jest-environment jsdom
 */
import React from "react";

import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import MovieCard from "..";
import { movieWithoutPlot, normalMovie } from "./__fixtures__/movieList";

afterEach(cleanup);

test("Moviecard renders with no problems when movie contains all data", () => {
  render(<MovieCard {...normalMovie} />);
  expect(screen.getByTestId("moviecard-component")).toBeInTheDocument();
});
test("Moviecard renders with no plot section when movie does not have it", () => {
  render(<MovieCard {...movieWithoutPlot} />);
  expect(screen.getByTestId("moviecard-component")).toBeInTheDocument();
  expect(screen.queryByTestId("moviecard-plot")).not.toBeInTheDocument();
});

test("Moviecard renders with no plot section when movie does not have it", () => {
  render(<MovieCard {...movieWithoutPlot} />);
  expect(screen.getByTestId("moviecard-component")).toBeInTheDocument();
  expect(screen.queryByTestId("moviecard-plot")).not.toBeInTheDocument();
});
