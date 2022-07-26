module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 2,
    "no-console": 0,
    "class-methods-use-this": "off"
  },
  ignorePatterns: [
    'index.html',
    'webpack.config.js',
    'webpack.dev.config.js',
    'webpack.prod.config.js'
  ],
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
};