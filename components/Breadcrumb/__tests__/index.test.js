/**
 * @jest-environment jsdom
 */
import React from "react";

import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Breadcrumb, { getBreadcrumbStructure } from "..";

afterEach(cleanup);

test("Breadcrumb renders with no problems and contains default Home link", () => {
  render(<Breadcrumb />);
  expect(screen.getByTestId("breadcrumb-component")).toBeInTheDocument();
  expect(screen.getByText("Home")).toBeInTheDocument();
});

test("getBreadcrumbStructure helper should always return Home slugStructure - undefined param", () => {
  const slugStructure = getBreadcrumbStructure();
  expect(slugStructure).toBeInstanceOf(Array);
  expect(slugStructure).toEqual([{ text: "Home", slug: "/" }]);
});

test("getBreadcrumbStructure helper should always return Home slugStructure - empty param", () => {
  const slugStructure = getBreadcrumbStructure({});
  expect(slugStructure).toBeInstanceOf(Array);
  expect(slugStructure).toEqual([{ text: "Home", slug: "/" }]);
});

test("getBreadcrumbStructure helper should always return Home slugStructure - no text param", () => {
  const slugStructure = getBreadcrumbStructure({ slug: "/test" });
  expect(slugStructure).toBeInstanceOf(Array);
  expect(slugStructure).toEqual([{ text: "Home", slug: "/" }]);
});

test("getBreadcrumbStructure helper should always return Home slugStructure - no text param", () => {
  const slugStructure = getBreadcrumbStructure({ text: "test" });
  expect(slugStructure).toBeInstanceOf(Array);
  expect(slugStructure).toEqual([{ text: "Home", slug: "/" }]);
});

test("getBreadcrumbStructure helper should return an array containing the slug sent", () => {
  const slugStructure = getBreadcrumbStructure({ slug: "/test", text: "Test" });
  expect(slugStructure).toBeInstanceOf(Array);
  expect(slugStructure).toEqual([
    { text: "Home", slug: "/" },
    { text: "Test", slug: "/test" },
  ]);
});

//  test("Moviecard should render an empty advise and go home link if no favList is provided", () => {
//    render(<FavouriteMoviesList />);
//    expect(screen.getByTestId("fav-list-empty")).toBeInTheDocument();
//    expect(
//      screen.getByText("Ooops seems you still have no added favouties movies.")
//    ).toBeInTheDocument();
//    expect(
//      screen.getByText("Maybe can go back home and find some to add.")
//    ).toBeInTheDocument();

//    expect(screen.getByText("Go Home")).toBeInTheDocument();
//  });
