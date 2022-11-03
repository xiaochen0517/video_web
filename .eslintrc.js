module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/recommended",
    ],
    parserOptions: {
        parser: "babel-eslint",
        sourceType: "module",
    },
    rules: {
        "indent": ["error", 4],
        "jsx-quotes": ["error", "prefer-double"],
        "semi-style": ["error", "last"],
    },
};
