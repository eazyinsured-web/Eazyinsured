import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize for better analytics and performance
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate analytics into its own chunk for better caching
          analytics: ['@vercel/analytics', '@vercel/speed-insights']
        }
      }
    },
    // Enable source maps for better error tracking in production
    sourcemap: true,
    // Optimize bundle size
    minify: 'terser',
    target: 'esnext'
  },
  // Optimize development experience
  server: {
    port: 3000,
    host: true
  }
})
