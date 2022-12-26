module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'next', 'next/core-web-vitals'],
  rules: {
    'prettier/prettier': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    'react/no-unescaped-entities': 'off',
  },
}
