// @ts-check
const { defineConfig } = require('eslint-define-config')
module.exports = defineConfig({
  extends: ['./node_modules/chetzof-lint-config/eslint/index.js'],
  overrides: [
    {
      files: ['*.ts', '*.js'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./packages/**/tsconfig.json' ],
      },
      settings: {
        'import/extensions': ['.js', '.ts', '.vue'],
        'import/internal-regex': '^@/',
        'import/resolver': {
          typescript: {
            "project": "packages/*/tsconfig.json",
          }
        },
      },
    },

  ],
})
