import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwz3X-bBN4Z1Vijgc-LgvQIZQXjQevNp-DGKN8mZPHUzhzdKHXt4L_f12O5iQdxjscg/exec'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api/profile': {
        target: SCRIPT_URL,
        changeOrigin: true,
        rewrite: (path) => {
          const id = new URLSearchParams(path.split('?')[1]).get('id') ?? ''
          return `?id=${encodeURIComponent(id)}`
        },
      },
    },
  },
})