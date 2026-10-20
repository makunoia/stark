import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: new URL("./fixtures/", import.meta.url).pathname,
  plugins: [tailwindcss()],
  server: { host: "127.0.0.1", port: 4173, strictPort: true },
});
