module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        jest: true,
        commonjs: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:you-dont-need-lodash-underscore/compatible"
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: ["@typescript-eslint", "security"],
    rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error", { ignoreRestSiblings: true }],
        "@typescript-eslint/no-non-null-assertion": 0,
        "@typescript-eslint/no-empty-interface": 0,
    },
};
