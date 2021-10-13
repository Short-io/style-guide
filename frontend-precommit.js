module.exports = {
    "extends": ["./frontend.js"],
    "rules": {
        "react/jsx-closing-tag-location": 2,
        "react/jsx-closing-bracket-location": [2, {
            "selfClosing": "line-aligned",
            "nonEmpty": "line-aligned"
        }],
        "react/jsx-first-prop-new-line": [2, "multiline"],
        "react/jsx-max-props-per-line": [2, {
            "maximum": 1,
            "when": "always"
        }],
        "react/jsx-wrap-multilines": [2, {
            "declaration": "parens-new-line",
            "assignment": "parens-new-line",
            "return": "parens-new-line",
            "arrow": "parens-new-line",
            "condition": "ignore",
            "logical": "ignore",
            "prop": "ignore"
        }],
        "react/jsx-indent": [2, "tab"],
        "react/jsx-indent-props": [2, "tab"],
        "react/jsx-no-useless-fragment": 2,
    },
};