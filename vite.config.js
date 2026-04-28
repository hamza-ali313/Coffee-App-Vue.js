import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/deecafe/',
  plugins: [vue()],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/assets/scss/variables" as *;
        @use "@/assets/scss/mixins" as *;
        `,
        quietDeps: true // 👈 hides bootstrap warnings
      }
    }
  }
})