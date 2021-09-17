/**
 * @jest-environment jsdom
 */
import React from "react";

import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import { TitleDescriptionPair } from "../TitleDescriptionPair";

afterEach(cleanup);

test("TitleDescriptionPair renders with no problems", () => {
  render(<TitleDescriptionPair />);
  expect(screen.getByTestId("title-desc-component")).toBeInTheDocument();
});

test("TitleDescriptionPair should contain a description", () => {
  render(<TitleDescriptionPair description="desc" />);
  expect(screen.getByText("desc")).toBeInTheDocument();
});

test("TitleDescriptionPair should contain a description", () => {
  render(<TitleDescriptionPair description="desc" title="title" />);
  expect(screen.getByText("desc")).toBeInTheDocument();
  expect(screen.getByText("title")).toBeInTheDocument();
});
