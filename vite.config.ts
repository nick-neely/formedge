import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, "src/dev"),
  build: {
    outDir: "../../dist",
  },
  resolve: {
    alias: {
      "@lib": path.resolve(__dirname, "./src/lib"),
    },
  },
});
