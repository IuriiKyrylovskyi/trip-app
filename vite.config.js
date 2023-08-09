import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    server: {
      open: true,
      port: 5500,
      host: 'localhost',
    },
    define: {
      'process.env': {},
    },
    build: {
      outDir: 'dist',
    },
    plugins: [react()],
  };
})
