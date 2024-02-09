import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/nlw-expert-reactjs',
  plugins: [react({
    include: '**/*.tsx',
  })],
  server: {
    watch: {
      usePolling: true,
    },
  },
})
