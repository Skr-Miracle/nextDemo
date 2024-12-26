import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

// 补充完整 ESLint 配置
const fullEslintConfig = {
  ...eslintConfig[0],
   rules: {
       "react/no-unescaped-entities": "off"
   }
};

export default fullEslintConfig;
