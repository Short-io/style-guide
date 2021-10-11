module.exports = {
    "extends": ["./frontend.js"],
    "rules": {
        "react/jsx-max-props-per-line": [2, {
            "maximum": 1,
            "when": "always"
        }],
        "react/jsx-first-prop-new-line": "multiline",
        "react/jsx-indent-props": "tab",
        "react/jsx-one-expression-per-line": 2,
        "react/jsx-closing-bracket-location": [2, {
            "selfClosing": "line-aligned",
            "nonEmpty": "line-aligned"
        }],
        "react/jsx-closing-tag-location": 2,
    },
};