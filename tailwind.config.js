module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "omdb-gray-dark": "#333333",
        "omdb-gray-medium": "#828282",
        "omdb-gray-light": "silver",
      },
      gridTemplateColumns: {
        "moviecard-container": "3fr 1fr",
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
