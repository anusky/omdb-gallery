/**
 * @jest-environment jsdom
 */
import React from "react";

import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import MovieLink from "..";

afterEach(cleanup);

test("MovieLink renders with no problems ", () => {
  render(<MovieLink />);

  expect(screen.getByTestId("movie-link-component")).toBeInTheDocument();
  //    expect(screen.getByText("IMDB")).toBeInTheDocument();
});

test("MovieLink should contain `Check Movie` text by default ", () => {
  render(<MovieLink />);

  expect(screen.getByText("Check Movie")).toBeInTheDocument();
});

test("MovieLink should contain correct text when prop.text is set", () => {
  render(<MovieLink text="Test Text" />);

  expect(screen.getByText("Test Text")).toBeInTheDocument();
});
