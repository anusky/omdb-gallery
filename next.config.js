module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com", "picsum.photos"],
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      // {
      //   source: "/favourites",
      //   destination: "/api/movies/favourites",
      // },
    ];
  },
};
