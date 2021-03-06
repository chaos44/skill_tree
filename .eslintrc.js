module.exports = {
    env: {
      browser: true,
      es2020: true,
      "jest/globals": true,
      node: true
    },
    plugins: [
      "jest"
    ],
    settings: {
      react: {
        version: 'detect'
      }
    },
    extends: [
      'eslint:recommended',
      'plugin:prettier/recommended',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 11,
      sourceType: 'module'
    },
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'react/prop-types': 'off',
      'prettier/prettier': [
        'error',
        {
          bracketSpacing: true,
          printWidth: 120,
          semi: true,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'none',
          useTabs: false
        }
      ]
    }
  }
  