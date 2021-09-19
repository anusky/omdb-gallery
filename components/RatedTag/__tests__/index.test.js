/**
 * @jest-environment jsdom
 */
import React from "react";

import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RatedTag } from "..";

afterEach(cleanup);

test("RatedTag renders with no problems ", () => {
  render(<RatedTag rated="N/D" />);
  expect(screen.getByTestId("rated-tag")).toBeInTheDocument();
  expect(screen.getByText("N/D")).toBeInTheDocument();
});
