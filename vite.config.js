import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Devlaunch/', // Ensure the base matches your GitHub Pages repo name
  plugins: [react()],
  server: {
    hmr: true
  }
})
