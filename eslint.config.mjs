import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";

export default [
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.recommended,
    pluginPrettier.configs.recommended,
    {
    parser: "@typescript-eslint/parser",
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    plugins: ["react", "@typescript-eslint", "react-hooks"],
    rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off"
    },
    settings: { react: { version: "detect" } }
    }
];
