const path = require("path");
const postcss = require("postcss");
const tailwindcss = require("tailwindcss");
const cssnano = require("cssnano");
const fs = require("fs");

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: [
    "./src/*.njk",
    "./src/_includes/*.njk",
    "./src/_includes/partials/*.njk",
    "./src/_eleventy/*.js",
    "./src/assets/syntax.css",
  ],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

const defaultConfig = [
  require("postcss-preset-env")({ stage: 0 }),
  require("postcss-import")({ path: ["./src/assets"] }),
  tailwindcss,
];

const postCssConfig = {
  development: defaultConfig,
  production: [...defaultConfig, purgecss, cssnano],
};

module.exports = async () => {
  const stylesheet = await fs.readFileSync(
    path.join(__dirname, "..", "assets", "index.css"),
    "utf8"
  );

  const css = await postcss(postCssConfig[process.env.ELEVENTY_ENV]).process(
    stylesheet
  );

  return css;
};
