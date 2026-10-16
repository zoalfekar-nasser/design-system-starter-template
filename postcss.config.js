import postcssPresetEnv from "postcss-preset-env"; // Use 'import'

import purgecss from "@fullhuman/postcss-purgecss";
import presetEnv from "postcss-preset-env";

export default {
  // Use 'export default'
  plugins: [
    postcssPresetEnv({
      stage: 3,
    }),

    presetEnv(),
    purgecss({
      content: ["./index.html", "./src/**/*.{html,js}"],
      // safelist: ['is-active', /^js-/],   // classes added dynamically
    }),
  ],
};
