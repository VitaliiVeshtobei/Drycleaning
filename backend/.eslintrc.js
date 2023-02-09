module.exports = {
  env: {
    es2021: true,
    node: true,
    commonjs: true,
  },
  extends: [
    'eslint:recommended',
    'eslint-config-prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['eslint-plugin-prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'off',
    'prettier/prettier': 'error',
  },
};
