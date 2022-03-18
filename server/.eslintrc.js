const SEVERITY_ERROR = 2

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': SEVERITY_ERROR,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': SEVERITY_ERROR,
    'padding-line-between-statements': [
      SEVERITY_ERROR,
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'never', prev: 'import', next: 'import' },

      { blankLine: 'always', prev: ['let', 'const', 'var'], next: '*' },
      { blankLine: 'any', prev: ['let', 'const', 'var'], next: ['let', 'const', 'var'] },

      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    '@typescript-eslint/consistent-type-definitions': [
      SEVERITY_ERROR,
      'interface',
    ],
    '@typescript-eslint/naming-convention': [
      SEVERITY_ERROR,
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      SEVERITY_ERROR,
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false,
        },
      },
    ],
  },
};
