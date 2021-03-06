// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, 'comma-dangle': 'always-multiline' }],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'no-console': 'warn',
    semi: ['error', 'always'],
    'no-eval': 'error',
    'no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
  },
};
