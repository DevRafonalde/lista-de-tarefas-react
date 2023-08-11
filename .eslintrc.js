module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:react/recommended",
        "airbnb",
    ],
    overrides: [
    ],
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [
        "react",
    ],
    rules: {
        "eol-last": 0,
        "linebreak-style": 0,
        "no-console": "off",
        quotes: ["error", "double"],
        "class-methods-use-this": 0,
        indent: ["error", 4],
        "object-curly-spacing": ["error", "never"],
        "keyword-spacing": ["error", {
            overrides: {
                if: {after: false},
                for: {after: false},
                while: {after: false},
                static: {after: false},
                as: {after: false},
            },
        }],
        "template-curly-spacing": ["error", "never"],
        "import/no-extraneous-dependencies": 0,
        "no-unused-vars": 1,
        camelcase: 0,
    },
};
