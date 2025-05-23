//import { dirname } from "path";
//import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = dirname(__filename);

const compat = new FlatCompat({
  // NOTE : import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname, // Origin declaration => baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next'],
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
    },
  }),
  // Origin declaration => ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
