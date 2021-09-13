# Code style guide

This package provides basic ESLint and Prettier rules for code style.

## Install
Since ESLint can search its configs only in files prefixed with `eslint-config`, we need to install the package under a different module name:

```shell
npm i -D @short.io/eslint-config@npm:@short.io/style-guide
```
## Usage

For ESLint rules usage extends the rules in your `.eslintrc.js`.
```javascript
module.exports = {
    extends: ['@short.io/eslint-config/backend'],
};
```

For Prettier rules usage include the rules right in your `package.json`:
```json
"prettier": "@short.io/eslint-config/prettier"
```