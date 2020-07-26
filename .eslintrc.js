module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: 'airbnb',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'arrow-body-style': 0,
    'react/prefer-stateless-function': 0,
    'no-trailing-spaces': 0,
    'comma-dangle': 0,
    radix: 0,
    'max-len': [
      2,
      {
        code: 120,
        ignorePattern: '^import'
      }
    ],
    'jsx-a11y/label-has-for': 0,
    'class-methods-use-this': 0,
  }
};
