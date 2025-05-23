import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
  base: '/my-app-react/', // 👈 yeh repo name hai
  plugins: [react()],
});
