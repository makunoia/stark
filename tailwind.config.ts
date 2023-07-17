import type { Config } from "tailwindcss";
import { StarkPlugin } from "./stark.config";
const config = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  plugins: [StarkPlugin],
} satisfies Config;

export default config;
