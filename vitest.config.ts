import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        projects: [
            // you can use a list of glob patterns to define your projects
            // Vitest expects a list of config files
            // or directories where there is a config file
            'packages/*',
            'tests/*/vitest.config.{e2e,unit}.ts',
            // you can even run the same tests,
            // but with different configs in the same "vitest" process
            {
                test: {
                    name: 'happy-dom',
                    root: './tests',
                    environment: 'happy-dom',
                    setupFiles: ['./setup.happy-dom.ts'],
                },
            },
            // {
            //     test: {
            //         name: 'node',
            //         root: './shared_tests',
            //         environment: 'node',
            //         setupFiles: ['./setup.node.ts'],
            //     },
            // },
        ],
    },
})
