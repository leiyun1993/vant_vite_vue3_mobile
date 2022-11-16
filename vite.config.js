import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    proxy: {
      "/api": {
        target: 'https://oa.live.educlouddata.com/api', // live
        // target: "https://oa.qbjjyyun.net/api", //online
        changeOrigin: true,
        secure: false,      // 是否校验（或者说理会）对方https证书
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@icon': fileURLToPath(new URL('./src/assets/icon', import.meta.url)),
    }
  }
})
