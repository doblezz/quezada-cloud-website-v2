import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/_variables.scss";`, // Si tienes un archivo de variables SCSS, puedes importarlo aquí
      },
    },
  },
  resolve: {
    alias: {
      '@src': '/src',
      '@components': '/src/components',
      '@utils': '/src/utils',
      '@assets': '/src/assets',
      '@styles': '/src/styles',
    },
  },
})
