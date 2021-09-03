// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        fam1: ["Dancing Script", "cursive"],
        fam2: ["Oswald", "sans-serif"],
        fam3: ["Lato", "sans-serif"],
      },
      colors: {
        githubGreen: "#009B69",
        githubGrey: "#C4C4C4",
        githubTextGrey: "#A1A1A1",
        githubBlue: "#3C89FC",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
