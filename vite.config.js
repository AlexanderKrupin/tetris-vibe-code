import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Для деплоя на GitHub Pages используем относительный base
  // Это позволит корректно работать при размещении в поддиректории вида https://<user>.github.io/<repo>/
  base: './',
  plugins: [react()],
})
