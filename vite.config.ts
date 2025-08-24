import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import pkg from './package.json'

const homepage: string = pkg.homepage || '/'

// Extract path after "github.io"
const ghBase = homepage.includes('github.io')
    ? homepage.replace(/^https:\/\/[^/]+\.github\.io/, '')
    : '/'

export default defineConfig(() => {
  return {
    base: ghBase || '/',
    plugins: [react(), tailwindcss()],
  }
})
