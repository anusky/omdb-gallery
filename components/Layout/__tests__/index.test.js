/**
 * @jest-environment jsdom
 */
import React from "react";

import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Layout from "..";

afterEach(cleanup);

test("Layout should render with no problem", () => {
  render(<Layout />);
  expect(screen.getByTestId("layout-component")).toBeInTheDocument();
});

test("Layout should contain header, body and footer components", () => {
  render(<Layout />);
  expect(screen.getByTestId("header-component")).toBeInTheDocument();
  expect(screen.getByTestId("body-component")).toBeInTheDocument();
  expect(screen.getByTestId("footer-component")).toBeInTheDocument();
});
