import plugin from "tailwindcss/plugin";
import { PluginAPI } from "tailwindcss/types/config";

export const Stark = plugin(
  function ({ addBase, addComponents }: PluginAPI) {
    addBase({
      '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap")':
        "true",
      body: {
        margin: "0",
        fontFamily: '"Inter", sans-serif',
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        textSizeAdjust: "100%",
        textRendering: "optimizeLegibility",
      },
    });

    addComponents({
      ".rich-text-editor .ql-toolbar": {
        display: "flex",
        whiteSpace: "nowrap",
        overflowX: "auto",
        borderRadius: "4px 4px 0 0",
        border: "1px solid #e4e4e4 !important",
        borderBottom: "none !important",
        "@apply bg-white": "true",
      },
      ".rich-text-editor .ql-toolbar > .ql-formats,\n  .ql-snow.ql-toolbar button,\n  .ql-snow .ql-toolbar button":
        {
          margin: "0 !important",
        },
      ".rich-text-editor .ql-container": {
        borderRadius: "0 0 4px 4px",
        height: "200px",
        border: "1px solid #e4e4e4 !important",
      },
      td: { padding: "0px" },
    });
  },
  {
    theme: {
      colors: {
        white: "#FFFFFF",
        black: "#3E3E3E",
        transparent: "#00000000",
        primary: {
          base: "#7525C7",
          hover: "#560F9E",
          active: "#9842F0",
          muted: "#F5ECFF",
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
        },
        info: {
          base: "#204D7B",
          hover: "#1473D9",
          active: "#0A579C",
          muted: "#EEF4FF",
        },
        success: {
          base: "#064F1B",
          hover: "#2F9546",
          active: "#064F16",
          muted: "#F3FFEE",
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
        h1: ["3.125rem", "3.375rem"],
        h2: ["2.5rem", "2.75rem"],
        h3: ["2.125rem", "2.375rem"],
        h4: ["1.75rem", "2rem"],
        h5: ["1.5rem", "1.75rem"],
        h6: ["1.25rem", "1.375rem"],
        "body-lg": ["1rem", "1.125rem"],
        body: ["0.875rem", "1rem"],
        caption: ["0.75rem", "0.875rem"],
      },
      fontFamily: {
        default: "Inter, sans-serif",
      },
      borderRadius: {
        0: "0",
        "4px": "4px",
        "8px": "8px",
        "16px": "16px",
        md: "0.375rem",
        full: "9999px",
      },
      spacing: {
        0: "0",
        "2px": "0.13rem",
        "4px": "0.3rem",
        "8px": "0.5rem",
        "10px": "0.625rem",
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
  }
);
