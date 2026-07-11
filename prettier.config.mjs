import * as prettierPluginOxc from "@prettier/plugin-oxc";

/** @type {import("prettier").Config} */
const config = {
  plugins: [prettierPluginOxc],
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs,jsx}"],
      options: { parser: "oxc" },
    },
    {
      files: ["**/*.{ts,mts,cts,tsx}"],
      options: { parser: "oxc-ts" },
    },
  ],
};

export default config;
