/**
 * @jest-environment jsdom
 */
import React from "react";

import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import Loader from "..";

afterEach(cleanup);

test("Loader should render with no problem", () => {
  render(<Loader />);
  expect(screen.getByText("Loading...")).toBeInTheDocument();
});
