/**
 * @jest-environment jsdom
 */
import React from "react";

import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ratingList } from "./__fixtures__/ratingList";
import { RatingTags } from "..";

afterEach(cleanup);

test("RatingTags renders with no problems ", () => {
  render(<RatingTags ratingList={ratingList} />);
  expect(screen.getByTestId("rating-component")).toBeInTheDocument();
});

test("RatingTags should contain 3 ratings ", async () => {
  /**
   * Fixture ratingList contains 3 ratings
   */
  render(<RatingTags ratingList={ratingList} />);
  const items = await screen.findAllByTestId("single-rating-component");
  expect(items).toHaveLength(3);
});

test("RatingTags should contain 3 ratings ", async () => {
  /**
   * Fixture ratingList contains 3 ratings
   */
  render(<RatingTags ratingList={ratingList} />);
  const items = await screen.findAllByTestId("single-rating-component");
  expect(items).toHaveLength(3);
});
