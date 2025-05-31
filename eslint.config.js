const { defineConfig, globalIgnores } = require('eslint/config');
const globals = require('globals');
const js = require('@eslint/js');

const tsParser = require('@typescript-eslint/parser');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const svelte3 = require('eslint-plugin-svelte3');
const prettier = require('eslint-plugin-prettier');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 12,
      sourceType: 'module',
      parserOptions: {},
    },

    extends: compat.extends('airbnb-base'),

    plugins: {
      '@typescript-eslint': typescriptEslint,
      svelte3,
      prettier,
    },

    rules: {
      'prettier/prettier': 'error',
    },

    settings: {
      'svelte3/typescript': () => require('typescript'),
    },
  },
  {
    files: ['**/*.svelte'],
    processor: 'svelte3/svelte3',
  },
  globalIgnores(['public/', 'pnpm-lock.yaml']),
]);
