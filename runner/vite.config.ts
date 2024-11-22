import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    force: true
  },
  server: {
    watch: {
      // usePolling: false,
      followSymlinks: true,
      ignored: ['!../packages/**/*'],
    },
  },
  resolve: {
    preserveSymlinks: true,
  }
})
