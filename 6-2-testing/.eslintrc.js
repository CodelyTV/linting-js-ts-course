module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["simple-import-sort", "unused-imports", "import", "editorconfig"],
  rules: {
    //error prevention
    "array-callback-return": ["error", { checkForEach: true }],
    "no-await-in-loop": "error",
    "no-constant-binary-expression": "error",
    "no-constructor-return": "error",
    "no-promise-executor-return": "error",
    "no-self-compare": "error",
    "no-template-curly-in-string": "error",
    "no-unmodified-loop-condition": "error",
    "no-unreachable-loop": "error",
    "no-unused-private-class-members": "error",
    "no-use-before-define": "error",
    "require-atomic-updates": "error",

    // good practises
    camelcase: "error",
    eqeqeq: "error",
    "new-cap": "error",
    "no-array-constructor": "error",
    "no-console": ["error", { allow: ["error"] }],
    "no-else-return": ["error", { allowElseIf: false }],
    "no-extend-native": "error",
    "no-lonely-if": "error",
    "no-param-reassign": "error",
    "no-return-assign": "error",
    "no-throw-literal": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-const": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    radix: "error",
    yoda: "error",

    // style
    semi: ["error", "always"],
    quotes: ["error", "double"],

    // plugins
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/no-restricted-paths": [
      "error",
      {
        zones: [{ target: "./src", from: "./ui" }],
      },
    ],
    "import/no-webpack-loader-syntax": "error",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
  ignorePatterns: ["**/*.html"],
  overrides: [
    {
      files: ["tests/*.spec.js"],
      extends: [
        "plugin:jest/recommended",
        "plugin:jest/style",
        "plugin:jest-dom/recommended",
        "plugin:testing-library/dom",
      ],
    },
  ],
};
