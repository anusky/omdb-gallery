module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com"],
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
