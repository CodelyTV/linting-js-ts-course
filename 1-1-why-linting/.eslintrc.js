module.exports = {
  extends: ["eslint-config-codely/typescript"],
  parserOptions: {
    project: ["./tsconfig.json", "./tsconfig.config.json"],
  },
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
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
