module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "serviceworker": true,
        "jest": true,
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "globals": {
        "Clipboard": true,
        "process": true,
        "Stripe": true,
        "RequestInit": true,
        "JSX": true,
    },
    "settings": {
        "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
        "polyfills": ["fetch", "url"],
        "react": {
            "version": "detect",
        },
    },
    "plugins": ["@typescript-eslint", "react", "react-hooks", "jest"],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jest/recommended",
    ],
    "rules": {
        "react/destructuring-assignment": [2, "always"],
        "react/no-array-index-key": 2,
        "react/no-multi-comp": 2,
        "react/no-unstable-nested-components": 2,
        "@typescript-eslint/naming-convention": [2, {
            "selector": "variable",
            "format": ["camelCase", "UPPER_CASE", "PascalCase"]
        }],
        "@typescript-eslint/no-unused-vars": 2,
        "@typescript-eslint/ban-ts-comment": [2, {
            "ts-expect-error": "allow-with-description",
        }],
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/ban-ts-ignore": 0,
        "prefer-template": 2,
        "no-var": 2,
        "linebreak-style": [2, "unix"],
        "quotes": [2, "single", {
            "avoidEscape": true
        }],
        "semi": [2, "always"],
        "max-lines": 2,
        "indent": [2, 4]
    },
};
