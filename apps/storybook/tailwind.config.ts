import type { Config } from "tailwindcss";
import { Stark } from "stark-lib/tailwind.plugin";

const config = {
  content: ["../../package/stark/dist/**/*.js"],
  plugins: [Stark],
} satisfies Config;

export default config;
