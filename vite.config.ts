import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/TestPortfolio/',
  plugins: [react()],
  build: {
    outDir: 'dist',  // Output directory
    rollupOptions: {
      input: './index.html',  // Input file
    },
  },
})
