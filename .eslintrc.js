module.exports = {
  root: true,
  env: {
    node: true,
    mocha: true,
    es2021: true,
  },
  extends: ['airbnb'],
  plugins: ['no-loops'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2021,
    parser: '@babel/eslint-parser',
  },
  rules: {
    semi: [2, 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always',
      },
    ],
    'max-len': [2, { code: 150, ignoreUrls: true, ignoreComments: true }],
    'max-lines-per-function': [
      // CR6
      'error',
      {
        max: 30,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      },
    ],
    'max-depth': [
      'error',
      {
        max: 2,
      },
    ],
    'no-loops/no-loops': 2, // CR2
    'no-restricted-syntax': [
      // CR3
      'error',
      {
        selector:
          'VariableDeclaration[kind="let"]:not(:matches([declarations.length=1][declarations.0.id.name=/counter*/]))',
        message: 'Using "let" is not allowed except for "counter".',
      },
    ],
    'import/no-import-module-exports': 0,
    'no-underscore-dangle': 0,
    'arrow-parens': 0,
    'consistent-return': 0,
    'no-use-before-define': 0,
    'import/no-cycle': 0,
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        mocha: true,
      },
    },
  ],
};
