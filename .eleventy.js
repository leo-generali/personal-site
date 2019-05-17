const groupBy = require('lodash.groupby');
const htmlmin = require('html-minifier');
const inclusiveLangPlugin = require('@11ty/eleventy-plugin-inclusive-language');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(inclusiveLangPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);

  // Content Transforms
  eleventyConfig.addTransform('htmlmin', require('./scripts/html-minify'))

  // Collections
  eleventyConfig.addCollection('tagsList', require('./scripts/get-all-tags'));
  eleventyConfig.addCollection('postsByYear', require('./scripts/posts-by-year'))

  // Copy over favicon to build site
  eleventyConfig.addPassthroughCopy('favicon.ico');
  eleventyConfig.addPassthroughCopy('img');
};
