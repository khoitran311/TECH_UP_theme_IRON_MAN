const tailwindcss = require("tailwindcss");
const postCSSNested = require("postcss-nested");
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: ["postcss-preset-env", tailwindcss, postCSSNested, autoprefixer]
};
