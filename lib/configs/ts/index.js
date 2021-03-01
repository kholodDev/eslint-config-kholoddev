const { env } = require('../common')
const rules = require('./rules')

module.exports = {
    env: {
        ...env,
    },
    files: ['*.ts'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: '.',
        ecmaFeatures: {
            jsx: true,
            globalReturn: false,
        },
        warnOnUnsupportedTypeScriptVersion: true,
    },
    extends: [
        'eslint:all',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    plugins: [],
    rules,
}
