module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'prettier',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  env: { browser: true, es6: true, node: true },
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'jsx-a11y/anchor-is-valid': 0,
    eqeqeq: 0,
    'no-use-before-define': 'off',
    'react/prop-types': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        mjs: 'never',
      },
    ],
    'import/prefer-default-export': 0,
    'class-methods-use-this': 0,
    semi: [2, 'always'],
  },
  settings: { react: { version: 'detect' } },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-use-before-define': ['error'],
      },
    },
  ],
};
