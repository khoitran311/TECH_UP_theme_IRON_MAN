const tailwindcss = require("tailwindcss");
const postCSSNested = require("postcss-nested");
const autoprefixer = require("autoprefixer");
const prefixer = require("postcss-prefix-selector");

module.exports = {
  plugins: [
    "postcss-preset-env",
    tailwindcss,
    postCSSNested,
    autoprefixer,
    prefixer({
      prefix: ".linkstar",
      transform: (prefix, selector, prefixedSelector) => {
        if (selector === ".linkstar") {
          return ".linkstar";
        }
        return prefixedSelector;
      }
    })
  ]
};
