import { fromCommasToArray } from "./strings";

export const SCHEMA_TYPES = {
  MOVIE: "movie",
};

export const getPersonsStringStructure = (names) => {
  return fromCommasToArray(names).map((name) => ({
    "@type": "Person",
    name,
  }));
};

export const MovieSchema = {
  init({ Actors, Ratings, Director, Plot, Title, Writer, Poster }) {
    this.setActor = Actors;
    this.setAuthor = Writer;
    this.setDirector = Director;
    this.title = Title;
    this.description = Plot;
    this.image = Poster;
  },
  set setActor(actors) {
    const actorArray = getPersonsStringStructure(actors);
    this.actor = actorArray;
  },
  set setAuthor(writers) {
    const authorArray = getPersonsStringStructure(writers);
    this.author = authorArray;
  },
  set setDirector(directors) {
    const director = getPersonsStringStructure(directors);
    this.director = director;
  },
  get schema() {
    return {
      "@context": "https://schema.org",
      "@type": "Movie",
      actor: this.actor,
      //   aggregateRating: {
      //     "@type": "AggregateRating",
      //     bestRating: "10",
      //     ratingCount: "200",
      //     ratingValue: "8",
      //     reviewCount: "50",
      //   },
      author: this.author,
      description: this.description,
      director: this.director,
      name: this.title,
      thumbnailUrl: this.image,
    };
  },
};

export const getSchemaByType = (type, movieInfo) => {
  switch (type) {
    case SCHEMA_TYPES.MOVIE:
      MovieSchema.init(movieInfo);
      return MovieSchema.schema;
    default:
      console.log(`We could not get a correct schema type of Type: ${type}`);
      return {};
  }
};
