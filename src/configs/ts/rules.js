const { rules } = require('../common')

module.exports = {
    ...rules,
    /* eslint-disable quote-props */
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
}
