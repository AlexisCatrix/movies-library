/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./formkit.config.js"],
  theme: {
    extend: {
      fontFamily: { "bebas-neue": ['"Bebas Neue"', "cursive"] },
    },
  },
  plugins: [require("@formkit/themes/tailwindcss"), require("@tailwindcss/line-clamp")],
};
