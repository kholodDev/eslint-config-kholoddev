const { env } = require('../common')
const rules = require('./rules')

module.exports = {
    env: {
        ...env,
    },
    extends: ['eslint:all'],
    files: ['*.js'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
            globalReturn: false,
            impliedStrict: false,
        },
    },
    plugins: [],
    rules,
}
