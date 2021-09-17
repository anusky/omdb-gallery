/**
 * @jest-environment jsdom
 */
import React from "react";

import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import SingleGenre from "../single-genre";

afterEach(cleanup);

test("Single Genre renders with no problems ", () => {
  /**
   * "Action, Adventure"
   */
  render(<SingleGenre genre="Some Text" />);
  expect(screen.getByText("Some Text")).toBeInTheDocument();
});
