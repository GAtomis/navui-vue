import { defineConfig } from 'vite'
import setupJSX from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [setupJSX()],
})

