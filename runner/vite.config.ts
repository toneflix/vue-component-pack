import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    force: true,
    include: ['../packages/**/*']
  },
  server: {
    watch: {
      usePolling: false,
      followSymlinks: true
    }
  },
  resolve: {
    preserveSymlinks: true
  }
})
