/*
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2019-09-04 11:21:55
 * @LastEditors: lvjing
 * @LastEditTime: 2019-09-05 10:32:03
 */
// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 6,
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md
    extends: ['plugin:vue/recommended', 'standard'],
    // required to lint *.vue files
    plugins: ['vue'],
    // add your custom rules here
    globals: {
        '__DEV__': true
    },
    rules: {
        'no-new': 'off',
        'no-void': 'off',
        'indent': ['warn', 4],
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'space-before-function-paren': ['error', 'never'], // 函数声明时括号与函数名间加空格，不允许有空格
        "eqeqeq": "warn",
        'no-useless-escape': 'warn', // 不必要的转义
        'new-cap': 'warn',
        'no-useless-call': 'warn',
        'no-unused-expressions': 'warn',
        'no-new-wrappers': 'warn',
        'no-array-constructor': 'warn',
        'semi': ['warn', 'always'], // 结束语句需要分号
        'vue/html-indent': ['warn', 4],
        'vue/require-default-prop': 0, // 后续进行优化
        'vue/require-prop-types': 0, // 后续进行优化 props定义类型
        'vue/prop-name-casing': ['error', 'camelCase'],
        'vue/no-v-html': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/html-closing-bracket-spacing': 'error',
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'never',
                    normal: 'any',
                    component: 'any'
                }
            }
        ]
    }
};

