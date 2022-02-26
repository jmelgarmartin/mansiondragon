const SEVERITY_ERROR = 2

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'padding-line-between-statements': [
      SEVERITY_ERROR,
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'never', prev: 'import', next: 'import' },

      { blankLine: 'always', prev: ['let', 'const', 'var'], next: '*' },
      { blankLine: 'any', prev: ['let', 'const', 'var'], next: ['let', 'const', 'var'] },

      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'comma-dangle': [
      SEVERITY_ERROR,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'max-len': [
      SEVERITY_ERROR,
      {
        code: 120,
      },
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
    'vue/require-name-property': [
      SEVERITY_ERROR,
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      SEVERITY_ERROR,
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
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': [SEVERITY_ERROR],
  },
}
