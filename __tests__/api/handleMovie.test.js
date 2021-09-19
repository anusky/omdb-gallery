import { createMocks } from "node-mocks-http";
import handleMovie from "../../pages/api/movies/[id]";

import movieFixture from "../../utils/__tests__/__fixtures__/movie.json";

global.fetch = jest.fn((url) =>
  Promise.resolve({
    json: () => {
      if (url.includes("tt0096895")) {
        return Promise.resolve(movieFixture);
      } else {
        // simulating bad id
        return Promise.resolve({ Error: "Movie not found!" });
      }
    },
  })
);

describe("/api/movies/[id]", () => {
  test("If no id is provided it should return an error 400", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        id: "",
      },
    });

    await handleMovie(req, res);

    expect(res._getStatusCode()).toBe(400);

    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        Error: "Bad movie id",
      })
    );
  });

  test("If correct id is sent, it should return movie structure", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        id: "tt0096895",
      },
    });

    await handleMovie(req, res);

    expect(res._getStatusCode()).toBe(200);

    expect(JSON.parse(res._getData())).toEqual(movieFixture);
  });

  test("If no correct id is sent, it should return movie structure", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        id: "test",
      },
    });

    await handleMovie(req, res);

    expect(res._getStatusCode()).toBe(200);

    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        Error: "Movie not found!",
      })
    );
  });
});
