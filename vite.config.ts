
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { configDefaults } from 'vitest/config' // optional, for advanced configs


export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  test: {
    globals: true,
    environment: 'jsdom',
  },
}) 
