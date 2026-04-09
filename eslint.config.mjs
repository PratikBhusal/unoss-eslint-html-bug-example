import html from "@html-eslint/eslint-plugin";
import { defineConfig, globalIgnores } from "eslint/config";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";
import { fileURLToPath } from "url";
import { dirname } from "path";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.html"],
    plugins: {
      html,
    },
    extends: [
      // Ideally, we wouuld just specify this as a plugin instead.
      // This is fine until I understand how configs are done better.
      eslintPluginBetterTailwindcss.configs.recommended,
      "html/recommended",
    ],
    settings: {
      "better-tailwindcss": {
        entryPoint: dirname(fileURLToPath(import.meta.url)) + "/src/index.css",
      },
    },
    language: "html/html",
    rules: {
      // Rely on prettier for styling instead of the `html-eslint` plugin
      "html/indent": "off",
      "html/no-extra-spacing-attrs": "off",
      "html/require-closing-tags": "off",
    },
  },
]);
