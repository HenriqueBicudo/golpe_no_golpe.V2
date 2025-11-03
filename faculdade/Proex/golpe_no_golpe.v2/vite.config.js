import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/golpe_no_golpe.V2/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})