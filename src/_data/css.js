const path = require("path");
const postcss = require("postcss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const fs = require("fs");

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: [
    "./src/*.njk",
    "./src/_includes/*.njk",
    "./src/_includes/partials/*.njk",
    "./src/eleventy/*.js"
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

const postCssConfig = {
  development: [require("postcss-preset-env")({ stage: 0 }), tailwindcss],
  production: [
    require("postcss-preset-env")({ stage: 0 }),
    tailwindcss,
    autoprefixer,
    purgecss,
    cssnano
  ]
};

module.exports = async () => {
  const stylesheet = await fs.readFileSync(
    path.join(__dirname, "..", "assets", "styles", "index.css"),
    "utf8"
  );

  const css = await postcss(postCssConfig[process.env.ELEVENTY_ENV]).process(
    stylesheet
  );

  return css;
};
