import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-website/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // Setting @ alias to point to src folder
    }
  },
});
