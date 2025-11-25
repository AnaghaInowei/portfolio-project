import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss({
      // Tailwind v4 reads config from tailwind.config.js automatically
      // Dark mode is configured as 'class' in tailwind.config.js
    })
  ],
})
