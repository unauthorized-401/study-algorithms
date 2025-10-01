import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";

export default [
  js.configs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        console: "readonly",
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        global: "readonly",
        module: "readonly",
        require: "readonly",
        exports: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      import: importPlugin,
    },
    rules: {
      ...tseslint.configs.recommended.rules,

      // 사용하지 않는 변수 검증 강화
      "@typescript-eslint/no-unused-vars": "error",
      "no-unused-vars": "off", // TypeScript 버전 사용

      // any 타입 사용 경고
      "@typescript-eslint/no-explicit-any": "warn",

      // import 순서 및 정리
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "import/no-unused-modules": "error",
      "import/no-duplicates": "error",

      // 백준 문제 풀이를 위해 console.log 허용
      "no-console": "off",
    },
  },
  {
    ignores: ["node_modules/**", "dist/**", "build/**"],
  },
];
