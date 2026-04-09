import html from "@html-eslint/eslint-plugin";
import { defineConfig, globalIgnores } from "eslint/config";
import unocss from "@unocss/eslint-config/flat";
import { fileURLToPath } from "url";
import { dirname } from "path";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.html"],
    plugins: {
      unocss,
      html,
    },
    extends: ["html/recommended"],
    language: "html/html",
    rules: {
      // Rely on prettier for styling instead of the `html-eslint` plugin
      "html/indent": "off",
      "html/no-extra-spacing-attrs": "off",
      "html/require-closing-tags": "off",
    },
  },
]);
