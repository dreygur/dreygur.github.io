/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: {
    files: ["src/**/*.rs", "index.html"],
  },
  darkMode: "media", // 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Roboto Mono"],
    },
    colors: {
      dark: {
        DEFAULT: "#0d1b2a",
      },
      primary: {
        DEFAULT: "#1b263b",
      },
      secondary: {
        DEFAULT: "#415a77",
      },
      shade: {
        DEFAULT: "#778da9",
      },
      text: {
        DEFAULT: "#e0e1dd",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
