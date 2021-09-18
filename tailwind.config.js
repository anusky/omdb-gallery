module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: ["active"],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "omdb-gray-dark": "#333333",
        "omdb-gray-dark-2": "#4F4F4F",
        "omdb-gray-medium": "#828282",
        "omdb-gray-light": "silver",
        "omdb-gray-light-2": "#F2F2F2",
      },
      gridTemplateColumns: {
        "2-1fr": "1fr 1fr",
      },
      width: {
        "fit-content": "fit-content",
      },
      height: {
        "fit-content": "fit-content",
      },
    },
    fontFamily: {
      body: ["Roboto", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
