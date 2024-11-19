import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}']
  },
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    rules: {
      "@typescript-eslint/no-explicit-any": ['error', { ignoreRestArgs: true, fixToUnknown: true }],
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser
      }
    }
  },
  {
    ignores: [
      '**/.*',
      'docs/**/*',
      'documentations/**/*',
      '**/config/',
      '**/docs/',
      '**/documentations/',
      '**/dist/',
      '**/.yarn/',
      '**/.quasar/',
      '**/.vitepress/',
      '**/node_modules/',
      '**/.eslintrc.cjs',
      '**/quasar.config.*.temporary.compiled*'
    ]
  }
]
