module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  parserOptions: {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  rules: {
    quotes: ['error', 'single'],
  },
  ignorePatterns: ['**/dist/* *.json']
};
