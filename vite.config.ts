import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    /**
     * Force a single Vue copy across the workspace.
     *
     * Cypress component tests load the mount adapter (`cypress/vue`) from the
     * root and the component under test from `packages/*`, each of which has its
     * own `node_modules/vue`. With two Vue runtimes on the page, the one that
     * renders the component is not the one whose module-level
     * `currentRenderingInstance` the compiled template reads, so every mount dies
     * in `renderSlot` with "Cannot read properties of null (reading 'ce')".
     */
    dedupe: ['vue']
  }
})
