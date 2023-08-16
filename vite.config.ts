// vite.config.ts
// @ts-ignore
import { defineConfig } from 'vite'
// @ts-ignore
import preact from '@preact/preset-vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  // base: '/',
})
