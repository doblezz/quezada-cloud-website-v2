import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/_variables.scss";`,
      },
    },
    postcss: {
      plugins: [autoprefixer],
    },
  },
  resolve: {
    esbuild: {
      jsxFactory: "React.createElement",
      jsxFragment: "React.Fragment",
    },
    alias: {
      "@src": "/src",
      "@components": "/src/components",
      "@utils": "/src/utils",
      "@assets": "/src/assets",
      "@styles": "/src/styles",
    },
  },
});
