/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ["layouts/**/*.html"],
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        futura: "Futura, 'Trebuchet MS', Arial, sans-serif",
      },
      container: {
        center: true,
      },
      colors: {
        primary: "#36C94D",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
