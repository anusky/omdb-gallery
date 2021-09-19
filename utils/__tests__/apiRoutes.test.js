import { getMovieUrl, getSearchUrl } from "../apiRoutes";

describe("getSearchUrl functionality", () => {
  it("should return omdbapi url even when no params are sent", () => {
    expect(getSearchUrl()).toBe("https://omdbapi.com/?s=&page=1&apikey=123456");
  });
  it("should return omdbapi url containing parmas", () => {
    expect(getSearchUrl("hola", 3)).toBe(
      "https://omdbapi.com/?s=hola&page=3&apikey=123456"
    );
  });
});

describe("getSearchUrl functionality", () => {
  it("should return omdbapi url even when no params are sent", () => {
    expect(getMovieUrl()).toBe(
      "https://omdbapi.com/?i=&plot=full&apikey=123456"
    );
  });
  it("should return omdbapi url containing params sent", () => {
    expect(getMovieUrl("id-test")).toBe(
      "https://omdbapi.com/?i=id-test&plot=full&apikey=123456"
    );
  });
});
