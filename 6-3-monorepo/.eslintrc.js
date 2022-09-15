module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["simple-import-sort", "import", "unused-imports"],
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
    "one-var": "error",
    "prefer-const": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    radix: "error",
    yoda: "error",

    // style
    curly: "error",
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
    ],

    // plugins
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/no-unresolved": "error",
    "import/no-webpack-loader-syntax": "error",
    "prettier/prettier": ["error", { printWidth: 100 }],
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Side effect imports: `import "./setup";`
          ["^\\u0000"],
          // Packages: `import fs from "fs";`
          ["^@?\\w"],
          // Internal packages.
          ["^(@|@codely)(/.*|$)"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports.
          ["^.+\\.s?css$"],
        ],
      },
    ],
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
  overrides: [
    {
      files: ["*.ts"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/typescript",
      ],
      plugins: ["@typescript-eslint"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": ["error"],
        "@typescript-eslint/member-ordering": [
          "error",
          {
            default: [
              // Index signature
              "signature",

              // Fields
              "public-static-field",
              "protected-static-field",
              "private-static-field",
              "public-decorated-field",
              "protected-decorated-field",
              "private-decorated-field",
              "public-instance-field",
              "protected-instance-field",
              "private-instance-field",
              "public-abstract-field",
              "protected-abstract-field",
              "private-abstract-field",

              // Constructors
              "public-constructor",
              "protected-constructor",
              "private-constructor",

              // Methods
              "public-abstract-method",
              "protected-abstract-method",
              "private-abstract-method",
              "public-static-method",
              "protected-static-method",
              "private-static-method",
              "public-decorated-method",
              "protected-decorated-method",
              "private-decorated-method",
              "public-instance-method",
              "protected-instance-method",
              "private-instance-method",
            ],
          },
        ],
        "@typescript-eslint/no-confusing-non-null-assertion": ["error"],
        "@typescript-eslint/no-confusing-void-expression": [
          "error",
          { ignoreArrowShorthand: true },
        ],
        "@typescript-eslint/no-explicit-any": ["warn"],
        "@typescript-eslint/no-extra-non-null-assertion": ["error"],
        "@typescript-eslint/no-floating-promises": ["error"],
        "@typescript-eslint/no-non-null-asserted-optional-chain": ["error"],
        "@typescript-eslint/no-non-null-assertion": ["error"],
        "@typescript-eslint/no-require-imports": ["error"],
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": ["error"],
        "@typescript-eslint/no-unnecessary-condition": ["error"],
        "@typescript-eslint/no-useless-constructor": ["error"],
        "@typescript-eslint/prefer-for-of": ["error"],
        "@typescript-eslint/prefer-nullish-coalescing": ["error"],
        "@typescript-eslint/prefer-readonly": ["error"],
        "@typescript-eslint/promise-function-async": ["error", { checkArrowFunctions: false }],
        "@typescript-eslint/sort-type-union-intersection-members": ["error"],
        "@typescript-eslint/switch-exhaustiveness-check": ["error"],
      },
    },
  ],
};
