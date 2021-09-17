/**
 * @jest-environment jsdom
 */
import React from "react";

import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ratingList } from "./__fixtures__/ratingList";
import SingleRating from "../SingleRating";

afterEach(cleanup);

test("SingleRating renders with no problems ", () => {
  render(<SingleRating rating={ratingList[0]} />);
  expect(screen.getByTestId("single-rating-component")).toBeInTheDocument();
});

test("SingleRating renders Imbd rating with no problem ", () => {
  // Position
  render(
    <SingleRating
      rating={{ Source: "Internet Movie Database", Value: "7.5/10" }}
    />
  );
  expect(screen.getByTestId("icon-imbd")).toBeInTheDocument();
});

test("SingleRating renders rotten tomatoes rating with no problem ", () => {
  render(<SingleRating rating={{ Source: "Rotten Tomatoes", Value: "71%" }} />);
  expect(screen.getByTestId("icon-rotten-tomatoes")).toBeInTheDocument();
});

test("SingleRating renders Metacritic rating with no problem ", () => {
  render(<SingleRating rating={{ Source: "Metacritic", Value: "69/100" }} />);
  expect(screen.getByTestId("icon-metacritic")).toBeInTheDocument();
});
