import _import from 'eslint-plugin-import';
import eslintPluginVue from 'eslint-plugin-vue'
import { fixupPluginRules } from '@eslint/compat';
import js from '@eslint/js';
import parser from 'vue-eslint-parser';
import ts from 'typescript-eslint';
import tsParser from "@typescript-eslint/parser"

export default ts.config(
    js.configs.recommended,
    ...ts.configs.recommended,
    ...eslintPluginVue.configs['flat/essential'],
    {
        ignores: [
            "**/.*",
            "**/config",
            "**/docs",
            "**/docs/**",
            "**/dist/**",
            "**/.yarn/**",
            "**/.quasar",
            "**/.vitepress",
            "**/node_modules",
            "**/.eslintrc.cjs",
            "**/quasar.config.*.temporary.compiled*"
        ],
    }, {
    files: ["**/*.ts", "**/*.tsx", "**/*.vue", "**/*.js"],
    plugins: {
        import: fixupPluginRules(_import),
    },

    languageOptions: {
        parser,
        parserOptions: {
            parser: tsParser
        }
    },

    // https://eslint.org/docs/rules/
    rules: {
        'prefer-promise-reject-errors': 'off',

        quotes: ['warn', 'single', { avoidEscape: true }],

        // this rule, if on, would require explicit return type on the `render` function
        '@typescript-eslint/explicit-function-return-type': 'off',

        // in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
        '@typescript-eslint/no-var-requires': 'off',

        // The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
        // does not work with type definitions
        'no-unused-vars': 'off',

        '@typescript-eslint/no-empty-object-type': 'off',

        'vue/max-attributes-per-line': 'off'
    },
});
