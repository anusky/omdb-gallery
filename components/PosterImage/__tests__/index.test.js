/**
 * @jest-environment jsdom
 */
import React from "react";

import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import PosterImage from "..";
import { normalMovie } from "@/components/MovieCard/__tests__/__fixtures__/movieList";

afterEach(cleanup);

test("PosterImage renders with no problems ", () => {
  render(<PosterImage Poster={normalMovie.Poster} Title={normalMovie.Title} />);
  expect(screen.getByTestId("poster-image-component")).toBeInTheDocument();
});

test("PosterImage should contain an image alt ", () => {
  render(<PosterImage Title="Alt test" />);
  expect(screen.getByAltText("Alt test")).toBeInTheDocument();
});

test("PosterImage should render an advise span when Poster is sent ", () => {
  render(<PosterImage Title="Alt test" />);
  expect(screen.getByText("No Poster Available")).toBeInTheDocument();
});
