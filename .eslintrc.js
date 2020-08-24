module.exports = {
  'env': {
    'browser': true,
    'es2020': true,
    'commonjs': true,
    'es6': true
  },
  'extends': [
		'eslint:recommended',
		'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 11,
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module'
  },
  'plugins': [
    'vue',
    '@typescript-eslint'
  ],
  'rules': {
    'linebreak-style': [
      'error',
      'windows'
    ],
    'quotes': [
      'warn',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'vue/max-attributes-per-line': [2, {
      'singleline': 10,
      'multiline': {
        'max': 1,
        'allowFirstLine': true
      }
    }],
  }
};
