/**
 * @jest-environment jsdom
 */
import React from "react";

import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import MetaTags from "..";

afterEach(cleanup);

test("Header should render with no problem", () => {
  render(<MetaTags />);
});
