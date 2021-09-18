/**
 * @jest-environment jsdom
 */
import React from "react";

import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "..";

afterEach(cleanup);

test("Layout should render with no problem", () => {
  render(<Footer />);
  expect(screen.getByTestId("footer-component")).toBeInTheDocument();
});
