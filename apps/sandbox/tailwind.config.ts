import type { Config } from "tailwindcss";
import { Stark } from "@makunoia/stark/stark-plugin";

const config: Config = {
  content: [
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
    "../../package/stark/dist/components/*.js",
  ],

  plugins: [Stark],
};
export default config;
