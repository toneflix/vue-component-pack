import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {
    alias: {
      '@types/paystack__inline-js': resolve(__dirname, '../../types/paystack__inline-js')
    }
  },
  build: {
    outDir: 'es',
    minify: true,
    emptyOutDir: true,
    rollupOptions: {
      external: ['vue', 'vue-router', '@paystack/inline-js'],
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
