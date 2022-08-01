module.exports = {
  "env": {
    "browser": true,
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  "plugins": ["@typescript-eslint"],
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "@typescript-eslint/no-non-null-assertion": "off"
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};
