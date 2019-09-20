module.exports = {
  env: {
    "browser": true,
    "jasmine":true,
    "protractor": true,
    "es6": true,
    "commonjs": true,
    "node": true,
    "amd": true,
    "worker":true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
  },
};
