module.exports = {
    env: {
        node: true,
        commonjs: true,
        es2021: true,
        jest: true
    },
    extends: 'standard',
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        indent: [
            'error',
            4
        ]
    }
}
