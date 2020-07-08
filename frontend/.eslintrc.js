module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    $nuxt: true,
  },

  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier/vue',
    'plugin:prettier/recommended'
  ],
  // add your custom rules here
  rules: {
    'semi': 'never',
    'arrow-parens': [2, 'as-needed', { 'requireForBlockBody': true }],
    'space-before-function-paren': ['warn', { anonymous: 'always', named: 'always', asyncArrow: 'always' }],
    "comma-dangle": ["error", "only-multiline"],

    'indent': 2,
    'singleQuote': true,
    'array-bracket-spacing': always,
    'eslint.autoFixOnSave': true,

    'prettier/prettier': ['error'],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
}
