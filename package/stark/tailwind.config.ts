import type { Config } from "tailwindcss";
import { Stark } from "stark-lib/tailwind.plugin";

const config = {
  content: [
    "./dist/components/*.{js,ts,jsx,tsx}",
    "./dist/components/molecules/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/components/molecules/*.{js,ts,jsx,tsx}",
  ],
  plugins: [Stark],
} satisfies Config;

export default config;
