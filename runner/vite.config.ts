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
      // usePolling: false,
      followSymlinks: true
    }
  },
  resolve: {
    alias: {
      lodash: 'lodash-es',
    },
  }
})
