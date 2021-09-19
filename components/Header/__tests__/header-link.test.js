/**
 * @jest-environment jsdom
 */
import React from "react";

import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import HeaderLink from "../header-link";

afterEach(cleanup);

test("Header should render with no problem", () => {
  render(<HeaderLink href="/" text="Home" />);
  expect(screen.getByTestId("header-link-component")).toBeInTheDocument();
});

test("Header should contain a link with href from props", () => {
  render(<HeaderLink href="/" text="Home" />);
  expect(screen.getByRole("link")).toHaveAttribute("href", "/");
});
