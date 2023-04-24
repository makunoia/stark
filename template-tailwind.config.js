/** @type {import('tailwindcss').Config} */

module.exports = {
  presets: [require("@eventful-ph/stark/lib/tailwind.config.js")],
  content: [
    "./node_modules/@eventful-ph/stark/lib/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@eventful-ph/stark/lib/components/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          //Customize your theme here
          // base: "#6667AB",
          // hover: "#4C4D81",
          // active: "#28295c",
          // muted: "#f0f0fa",
        },
      },
    },
  },
};
