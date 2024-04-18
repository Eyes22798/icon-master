import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import parserVue from 'vue-eslint-parser'


export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020,
        ...globals.node,
      },
      ecmaVersion: 2020,
      parser: parserVue,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    ignores: ["packages/*/dist", "packages/*/lib", "packages/*/html", "*/**.d.ts", "*/**.js"],
  },
];
