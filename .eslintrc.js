module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        // "plugin:vue/essential",
        "plugin:vue/vue3-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
        ecmaVersion: 12,
        parser: "@typescript-eslint/parser",
        sourceType: "module",
    },
    plugins: ["vue", "@typescript-eslint"],
    rules: {
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-var-requires": 0,
    },
};
