import { viteStaticCopy as copy } from 'vite-plugin-static-copy'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    minify: true,
    emptyOutDir: true,
    rollupOptions: {
      external: ['vue', 'axios', 'pinia', 'vue-router'],
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
  plugins: [
    vue(),
    dts({ rollupTypes: true }),
    copy({
      targets: [
        {
          src: 'global.d.ts',
          dest: './'
        }
      ]
    })
  ]
})
