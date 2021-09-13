# Code style guide

This package provides basic ESLint and Prettier rules for code style.

## Usage

First install this package:
```shell
npm i @short.io/style-guide
```

For ESLint rules usage extends the rules in your `.eslintrc.js`:
```javascript
module.exports = {
    extends: ['@shortcm/eslint-config/backend'],
};
```

For Prettier rules usage include the rules right in your `package.json`:
```
"prettier": "@shortcm/eslint-config/prettier"
```