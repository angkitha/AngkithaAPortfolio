import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/TestPortfolio/',  // Ensure this is correct for GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'dist', // Make sure it outputs to the 'dist' folder
    rollupOptions: {
      output: {
        // Ensure the files are generated in the correct format
        entryFileNames: '[name]-[hash].js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash].[ext]',
      },
    },
  },
});
