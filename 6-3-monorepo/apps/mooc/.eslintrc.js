const path = require("path");

module.exports = {
  extends: ["plugin:@next/next/recommended"],
  rules: {
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          "@codely/*",
          "!@codely/frontend-mooc-context"
        ],
      },
    ],
    "@next/next/no-html-link-for-pages": [2, path.join(__dirname, "src/pages")],
  },
};
