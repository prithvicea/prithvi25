import js from "@eslint/js";
import next from "eslint-plugin-next";

export default [
  js.configs.recommended,
  next.configs.recommended,
  {
    rules: {
      "no-console": "warn",
      "no-unused-vars": "warn",
    },
  },
];
