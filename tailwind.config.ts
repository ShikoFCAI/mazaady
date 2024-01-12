const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
      
      colors: {
        theme: {
          base: "#F6F4F5",
          red: "#D20653",
          orange: "#FF951D",
          paleOrange: "#FFF5E9",
        },
      },
    },
  },
};