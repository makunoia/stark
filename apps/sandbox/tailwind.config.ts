import type { Config } from "tailwindcss";
import { Stark } from "stark-lib/stark-plugin";

const config: Config = {
  content: [
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
    // "../../package/stark/dist/components/*.js",
  ],
  theme: {
    backgroundColor: {
      brand: {
        DEFAULT: "#FFFFF",
        hover: "#FFFFF",
        active: "hsl(var(--bg-brand-active))",
        disabled: "hsl(var(--bg-brand-disabled))",
        subtle: {
          DEFAULT: "hsl(var(--bg-brand-subtle))",
          hover: "hsl(var(--bg-brand-subtle-hover))",
          active: "hsl(var(--bg-brand-subtle-active))",
        },
      },
    },
  },
  plugins: [Stark],
};
export default config;
