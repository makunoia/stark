import type { Config } from "tailwindcss";
import { Stark } from "./stark.config";
const config = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  plugins: [Stark],
} satisfies Config;

export default config;
