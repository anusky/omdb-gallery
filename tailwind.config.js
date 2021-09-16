module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        "moviecard-info-container": "3fr 1fr",
      },
      height: {
        "fit-content": "fit-content",
      },
    },
    fontFamily: {
      body: ["Roboto Condensed", "sans-serif"],
      title: ["Teko", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
