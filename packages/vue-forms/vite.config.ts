import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    outDir: 'es',
    minify: true,
    emptyOutDir: true,
    rollupOptions: {
      external: ['vue'],
      input: ['index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          exports: 'named',
          dir: './dist/es'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].cjs',
          preserveModules: true,
          exports: 'named',
          dir: './dist/lib'
        }
      ]
    },
    lib: {
      entry: './index.ts'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern' // or "modern-compiler", "legacy"
      }
    }
  },
  plugins: [vue()]
})
