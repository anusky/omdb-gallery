/**
 * @jest-environment jsdom
 */
import React from "react";

import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IMDBTag } from "..";

afterEach(cleanup);

test("RatedTag renders with no problems ", () => {
  render(<IMDBTag />);

  expect(screen.getByText("IMDB")).toBeInTheDocument();
});
