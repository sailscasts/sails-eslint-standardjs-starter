module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: 'standard',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    Promise: true,
    sails: true,
    _: true
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    'no-undef': ['off'],
    'no-irregular-whitespace': ['off']
  }
}
