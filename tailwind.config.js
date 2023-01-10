/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ['layouts/**/*.html'],
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        fraunces: "'Fraunces', serif",
      },
      container: {
        center: true,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

