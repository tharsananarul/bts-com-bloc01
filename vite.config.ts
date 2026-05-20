import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/bts-com-bloc01/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
