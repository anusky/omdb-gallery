/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";

import MovieCardList from "..";

describe("Home", () => {
  it("renders a heading", () => {
    render(<MovieCardList />);
    expect(screen.getByTestId("movie-card-list-container")).toBeInTheDocument();

    // const heading = screen.getByRole("heading", {
    //   name: /hola que tal/i,
    // });

    // expect(heading).toBeInTheDocument();
  });
});
