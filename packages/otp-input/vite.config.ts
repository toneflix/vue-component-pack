import { viteStaticCopy as copy } from 'vite-plugin-static-copy'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    minify: true,
    emptyOutDir: true,
    rollupOptions: {
      external: ['vue'],
      input: ['src/index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: false,
          exports: 'named',
          dir: './dist'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].cjs',
          preserveModules: false,
          exports: 'named',
          dir: './dist'
        }
      ]
    },
    lib: {
      entry: './src/index.ts',
      name: 'index'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern' // or "modern-compiler", "legacy"
      }
    }
  },
  plugins: [
    vue(),
    dts({ rollupTypes: true }),
    copy({
      targets: [
        {
          src: './src/global.d.ts',
          dest: './'
        }
      ]
    })
  ]
})
