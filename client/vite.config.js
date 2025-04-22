import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', 
  },
  preview: {
    allowedHosts: ['booktopia-app-z.onrender.com'], 
  },
})
