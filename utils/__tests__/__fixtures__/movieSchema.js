const MovieSchemaFixture = {
  "@context": "https://schema.org",
  "@type": "Movie",
  actor: [
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
  ],
  author: [
    {
      "@type": "Person",
      name: "Bob Kane",
    },
    {
      "@type": "Person",
      name: "Sam Hamm",
    },
    {
      "@type": "Person",
      name: "Warren Skaaren",
    },
  ],
  description:
    "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
  director: [
    {
      "@type": "Person",
      name: "Tim Burton",
    },
  ],
  name: "Batman",
  thumbnailUrl:
    "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
};

export default MovieSchemaFixture;
