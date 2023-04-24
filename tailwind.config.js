/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#323232",
      transparent: "#00000000",
      primary: {
        base: "#FF6000",
        hover: "#DF4530",
        active: "#B22410",
        muted: "#FFF3F1",
      },
      secondary: {
        base: "#BF355A",
        hover: "#832D44",
        active: "#52071B",
        muted: "#FFF6F9",
      },
      copy: {
        caption: "#5F5F5F",
        placeholder: "#AFAFAF",
        disabled: "#A3A3A3",
      },
      fill: {
        default: "#FBFBFB",
        dark: "#252525",
        disabled: "#F6F6F6",
      },
      gray: {
        50: "#F5F7F8",
        100: "#E9EAEC",
        200: "#DCDDE0",
        300: "#CFCFD4",
        400: "#C2C2C8",
        500: "#B5B5BC",
        600: "#A8A8B0",
        700: "#9B9BA4",
        800: "#8E8E98",
        900: "#3E3E4A",
      },
      info: {
        base: "#1E90FF",
        hover: "#1473D9",
        active: "#0A579C",
        muted: "#F0F8FF",
      },
      success: {
        base: "#3CB95F",
        hover: "#2F9546",
        active: "#064F16",
        muted: "#F9FFF6",
      },
      warning: {
        base: "#FFAA00",
        hover: "#CC8400",
        active: "#994D00",
        muted: "#FFF7E0",
      },
      danger: {
        base: "#F41A1A",
        hover: "#D42C22",
        active: "#A70B02",
        muted: "#FFF5F3",
      },
      outline: {
        default: "#E4E4E4",
      },
      focusRing: "#1D5CFE",
    },
    fontSize: {
      display: ["2rem", "2.5rem"],
      "page-title": ["1.75rem", "1.875rem"],
      "section-title": ["1.5rem", "1.625rem"],
      "paragraph-title": ["1.125rem", "1.25rem"],
      body: ["0.875rem", "1rem"],
      caption: ["0.75rem", "1rem"],
    },
    fontFamily: {
      default: "DM Sans, sans-serif",
      "jakarta-sans": "Plus Jakarta Sans, sans-serif",
    },
    borderRadius: {
      "4px": "4px",
      "8px": "8px",
      "16px": "16px",
      md: "0.375rem",
      full: "9999px",
    },
    spacing: {
      "2px": "0.13rem",
      "4px": "0.3rem",
      "8px": "0.5rem",
      "12px": "0.8rem",
      "16px": "1rem",
      "20px": "1.3rem",
      "24px": "1.5rem",
      "40px": "2.5rem",
    },
    lineHeight: {
      snug: "1.375rem",
      relaxed: "1.5rem",
      loose: "1.75rem",
    },
  },
  plugins: [],
};
