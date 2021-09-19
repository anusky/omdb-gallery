import {
  getPersonsStringStructure,
  getSchemaByType,
  MovieSchema,
  SCHEMA_TYPES,
} from "../schemas";

import MovieFixture from "./__fixtures__/movie.json";
import MovieSchemaFixture from "./__fixtures__/movieSchema";

describe("Schemas functionality", () => {
  const setActor = jest.spyOn(MovieSchema, "setActor", "set");
  const setAuthor = jest.spyOn(MovieSchema, "setAuthor", "set");
  const setDirector = jest.spyOn(MovieSchema, "setDirector", "set");

  it("When sending a 'names string' separated by commas, getPersonsStringStructure should return an Array containing Person structures", () => {
    const actors = getPersonsStringStructure(MovieFixture.Actors);
    expect(actors).toEqual([
      {
        "@type": "Person",
        name: "Michael Keaton",
      },
      {
        "@type": "Person",
        name: "Jack Nicholson",
      },
      {
        "@type": "Person",
        name: "Kim Basinger",
      },
    ]);
  });

  it("When creating a new MovieSchema an Actor should be setted and contain data", () => {
    MovieSchema.init(MovieFixture);
    expect(setActor).toHaveBeenCalled();
  });
  it("When creating a new MovieSchema an Author should be setted and contain data", () => {
    MovieSchema.init(MovieFixture);
    expect(setAuthor).toHaveBeenCalled();
  });
  it("When creating a new MovieSchema an Director should be setted and contain data", () => {
    MovieSchema.init(MovieFixture);
    expect(setDirector).toHaveBeenCalled();
  });

  it("When creating a new MovieSchema the schema should have specific shape", () => {
    MovieSchema.init(MovieFixture);
    expect(MovieSchema.schema).toEqual(MovieSchemaFixture);
  });
  it("When using getSchemaByType the returned schema should have same shape", () => {
    const movieSchema = getSchemaByType(SCHEMA_TYPES.MOVIE, MovieFixture);
    expect(movieSchema).toEqual(MovieSchemaFixture);
  });
});
