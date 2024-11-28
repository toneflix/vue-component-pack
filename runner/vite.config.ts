import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    noDiscovery: true,
    include: []
  },
  server: {
    watch: {
      followSymlinks: true
    }
  },
  resolve: {
    alias: {
      lodash: 'lodash-es'
    }
  }
})
