const shortcodes = require("./src/eleventy/shortcodes");
const transforms = require("./src/eleventy/transforms");
const filters = require("./src/eleventy/filters");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);

  // Content Transforms
  if (process.env.ELEVENTY_ENV === "production") {
    eleventyConfig.addTransform("htmlmin", transforms.minifyHtml);
  }
  eleventyConfig.addTransform("spoilerBlocks", transforms.spoilerBlocks);

  // Filters
  eleventyConfig.addFilter("keys", filters.keys);
  eleventyConfig.addFilter("formatDate", filters.formatDate);
  eleventyConfig.addFilter("formatTag", filters.formatTag);
  eleventyConfig.addFilter("publishedPosts", filters.publishedPosts);
  eleventyConfig.addFilter("log", filters.log);

  // Shortcodes
  eleventyConfig.addShortcode("link", shortcodes.link);
  eleventyConfig.addShortcode("year", shortcodes.year);

  eleventyConfig.addWatchTarget("./src/assets/styles/index.css");
  eleventyConfig.addWatchTarget("./tailwind.config.js");
  eleventyConfig.addWatchTarget("./src/eleventy/shortcodes.js");

  // Copy over favicon to build site
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("_redirects");

  // Configure markdown
  eleventyConfig.addPlugin(require("./src/scripts/markdown-config"));

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
