/** @type {import('tailwindcss').Config} */
import { tokens as theme } from "/design-tokens.js";
module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    ...theme,
  },
  plugins: [],
};

module.exports.theme = theme;
