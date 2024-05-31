import type { Config } from "tailwindcss";
import { Stark } from "stark-lib/stark-plugin";

const config: Config = {
  content: [
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
    "../../package/stark/dist/**/*.js",
    "../../package/stark/dist/**/**/*.js",
  ],
  theme: {
    backgroundColor: {
      brand: "#000",
    },
  },
  plugins: [Stark],
};
export default config;
