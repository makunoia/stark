import type { Config } from "tailwindcss";
import { Stark, libraryPath } from "stark-lib/stark-plugin";

const config: Config = {
  content: ["./src/app/*.{js,ts,jsx,tsx,mdx}", libraryPath],
  theme: {
    // backgroundColor: {
    //   brand: "#FF0000",
    // },
  },
  plugins: [Stark],
};
export default config;
