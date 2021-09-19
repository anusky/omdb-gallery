/**
 * @jest-environment jsdom
 */
import React from "react";

import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "..";

afterEach(cleanup);

test("Header should render with no problem", () => {
  render(<Header />);
  expect(screen.getByTestId("header-component")).toBeInTheDocument();
});
test("Header should contain two links", async () => {
  render(<Header />);
  const items = await screen.findAllByTestId("header-link-component");
  expect(items).toHaveLength(2);
});
