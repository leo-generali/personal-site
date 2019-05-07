const groupBy = require('lodash.groupby');
const htmlmin = require('html-minifier');
const inclusiveLangPlugin = require('@11ty/eleventy-plugin-inclusive-language');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(inclusiveLangPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);

  // Minify HTML
  eleventyConfig.addTransform('htmlmin', function(content, outputPath) {
    if (outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  eleventyConfig.addCollection('tagsList', require('./scripts/get-all-tags'));

  // Group all blog posts by year
  eleventyConfig.addCollection('postsByYear', (collection) => {
    const posts = collection
      .getAllSorted()
      .filter((item) => item.inputPath.match(/^\.\/writing\//) !== null)
      .reverse();

    const groupedPosts = groupBy(posts, (post) => post.date.getFullYear());

    return Object.entries(groupedPosts);
  });



  // Copy over favicon to build site
  eleventyConfig.addPassthroughCopy('favicon.ico');
  eleventyConfig.addPassthroughCopy('img');
};
