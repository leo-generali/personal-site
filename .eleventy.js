const shortcodes = require("./src/_eleventy/shortcodes");
const transforms = require("./src/_eleventy/transforms");
const filters = require("./src/_eleventy/filters");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);

  // Content Transforms
  if (process.env.ELEVENTY_ENV === "production") {
    eleventyConfig.addTransform("htmlmin", transforms.minifyHtml);
  }

  // Filters
  eleventyConfig.addFilter("keys", filters.keys);
  eleventyConfig.addFilter("formatDate", filters.formatDate);
  eleventyConfig.addFilter("formatTag", filters.formatTag);
  eleventyConfig.addFilter("publishedPosts", filters.publishedPosts);
  eleventyConfig.addFilter("log", filters.log);

  // Shortcodes
  eleventyConfig.addShortcode("link", shortcodes.link);
  eleventyConfig.addShortcode("year", shortcodes.year);

  // Paired Shortcodes
  eleventyConfig.addPairedShortcode("spoiler", shortcodes.spoiler);

  // Watch Targets
  eleventyConfig.addWatchTarget("./src/assets/*.css");
  eleventyConfig.addWatchTarget("./src/_eleventy/**/*.js");
  eleventyConfig.addWatchTarget("./src/_eleventy/*.js");
  eleventyConfig.addWatchTarget("./tailwind.config.js");

  // Copy over favicon to build site
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("./src/writing/2019/**/*.png");
  eleventyConfig.addPassthroughCopy("./src/writing/2020/**/*.png");
  eleventyConfig.addPassthroughCopy("_redirects");

  // Configure markdown
  eleventyConfig.addPlugin(require("./src/_eleventy/markdown-config"));

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
