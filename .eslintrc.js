module.exports = {
  'parser': 'babel-eslint',
  'extends': [
    'standard',
    'plugin:import/errors'
  ],
  'plugins': [
    'react',
    'flowtype',
    'jest'
  ],
  'rules': {
    'no-console': 'error',
    'no-unused-vars': 'error',
    'no-restricted-imports': ['warn',  'prop-types'],
    'react/jsx-uses-vars': 1,
    'react/jsx-uses-react': 1,
    'react/react-in-jsx-scope': 1,
    'flowtype/use-flow-type': 1,
    'flowtype/define-flow-type': 1,
    'object-curly-spacing': ['error', 'always'],
    'react/jsx-curly-brace-presence': [1, 'never'],

    'space-before-function-paren': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'camelcase': 0,
  },
  'env': {
    'jest/globals': true,
    'browser': true,
  },
}
