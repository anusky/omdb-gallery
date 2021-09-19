import { createMocks } from "node-mocks-http";
import handleSearchMovie from "../../pages/api/movies/search/index";

import searchResponse from "../__fixtures__/searchResponse.json";

global.fetch = jest.fn((url) =>
  Promise.resolve({
    json: () => {
      if (url.includes("bat")) {
        return Promise.resolve(searchResponse);
      } else {
        // simulating bad id
        return Promise.resolve({
          Response: "False",
          Error: "Movie not found!",
        });
      }
    },
  })
);

describe("/api/movies/search", () => {
  test("If no id is provided it should return an error 400", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        page: "1",
      },
    });

    await handleSearchMovie(req, res);

    expect(res._getStatusCode()).toBe(400);

    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        Error: "Bad movie id or page sent",
      })
    );
  });

  test("If no page is provided it should return an error 400", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        id: "",
      },
    });

    await handleSearchMovie(req, res);

    expect(res._getStatusCode()).toBe(400);

    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        Error: "Bad movie id or page sent",
      })
    );
  });

  test("If correct id is sent but length is less than 2, it should return loading status", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        id: "ba",
        page: "1",
      },
    });

    await handleSearchMovie(req, res);

    expect(res._getStatusCode()).toBe(200);

    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        loading: true,
      })
    );
  });

  test("If no correct id is sent, it should send a movie not found advise", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        id: "test",
        page: "1",
      },
    });

    await handleSearchMovie(req, res);

    expect(res._getStatusCode()).toBe(200);

    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        Response: "False",
        Error: "Movie not found!",
      })
    );
  });
});
