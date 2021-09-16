/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";

import MovieCardList from "..";

describe("Home", () => {
  it("renders a heading", () => {
    render(<MovieCardList />);

    const heading = screen.getByRole("heading", {
      name: /hola que tal/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
