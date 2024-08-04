import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';

import { FlatCompat } from '@eslint/eslintrc';
import _import from 'eslint-plugin-import';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import path from 'node:path';
import tsParser from '@typescript-eslint/parser';
import typescriptEslint from '@typescript-eslint/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...fixupConfigRules(compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:import/typescript",
)), {
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
    files: ["**/*.ts", "**/*.tsx", "**/*.vue", "**/*.js"],
    plugins: {
        "@typescript-eslint": fixupPluginRules(typescriptEslint),
        import: fixupPluginRules(_import),
    },

    languageOptions: {
        parser: tsParser,
    },

    // https://eslint.org/docs/rules/
    rules: {
        "no-fallthrough": "off",
        "no-constant-condition": "off",

        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
        "@typescript-eslint/no-this-alias": "off",
        "@typescript-eslint/no-explicit-any": "off",

        "@typescript-eslint/explicit-module-boundary-types": ["error", {
            allowArgumentsExplicitlyTypedAsAny: true,
        }],

        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "import/first": "error",

        // https://github.com/benmosher/eslint-plugin-import
        // "import/order": ["error", {
        //     // alphabetize: {
        //     //     order: "asc",
        //     //     caseInsensitive: false,
        //     // },

        //     groups: [["builtin", "external"], "parent", ["sibling", "index"]],
        //     "newlines-between": "always",
        // }],

        "import/newline-after-import": "error",
        "import/no-duplicates": "error",
        "import/no-mutable-exports": "error",

        "@typescript-eslint/no-empty-object-type": "off",

        'prefer-promise-reject-errors': 'off',

        quotes: ['warn', 'single', { avoidEscape: true }],

        // this rule, if on, would require explicit return type on the `render` function
        '@typescript-eslint/explicit-function-return-type': 'off',

        // in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
        '@typescript-eslint/no-var-requires': 'off',

        // The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
        // does not work with type definitions
        'no-unused-vars': 'off',
    },
}];
