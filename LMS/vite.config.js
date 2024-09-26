import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Allows you to use beforeEach, afterEach, etc.
    environment: 'jsdom', // Ensures the tests run in a browser-like environment
  },
})
