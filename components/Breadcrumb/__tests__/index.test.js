/**
 * @jest-environment jsdom
 */
import React from "react";

import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Breadcrumb, { getBreadcrumbStructure } from "..";

const basicSlugStructure = { text: "Home", slug: "/", icon: "home" };

afterEach(cleanup);

test("Breadcrumb renders with no problems and contains default Home link", () => {
  render(<Breadcrumb />);
  expect(screen.getByTestId("breadcrumb-component")).toBeInTheDocument();
  expect(screen.getByText("Home")).toBeInTheDocument();
});

test("getBreadcrumbStructure helper should always return Home slugStructure - undefined param", () => {
  const slugStructure = getBreadcrumbStructure();
  expect(slugStructure).toBeInstanceOf(Array);
  expect(slugStructure).toEqual([basicSlugStructure]);
});

test("getBreadcrumbStructure helper should always return Home slugStructure - empty param", () => {
  const slugStructure = getBreadcrumbStructure({});
  expect(slugStructure).toBeInstanceOf(Array);
  expect(slugStructure).toEqual([basicSlugStructure]);
});

test("getBreadcrumbStructure helper should always return Home slugStructure - no text param", () => {
  const slugStructure = getBreadcrumbStructure({ slug: "/test" });
  expect(slugStructure).toBeInstanceOf(Array);
  expect(slugStructure).toEqual([basicSlugStructure]);
});

test("getBreadcrumbStructure helper should always return Home slugStructure - no text param", () => {
  const slugStructure = getBreadcrumbStructure({ text: "test" });
  expect(slugStructure).toBeInstanceOf(Array);
  expect(slugStructure).toEqual([basicSlugStructure]);
});

test("getBreadcrumbStructure helper should return an array containing the slug sent", () => {
  const slugStructure = getBreadcrumbStructure({ slug: "/test", text: "Test" });
  expect(slugStructure).toBeInstanceOf(Array);
  expect(slugStructure).toEqual([
    basicSlugStructure,
    { text: "Test", slug: "/test" },
  ]);
});
