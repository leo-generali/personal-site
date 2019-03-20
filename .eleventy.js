const moment = require('moment');
const groupBy = require('lodash.groupby');
const htmlmin = require('html-minifier');
const alex = require('alex');

module.exports = function(eleventyConfig) {
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

  // Group all blog posts by year
  eleventyConfig.addCollection('postsByYear', (collection) => {
    const posts = collection
      .getAllSorted()
      .filter((item) => item.inputPath.match(/^\.\/posts\//) !== null)
      .reverse();

    const groupedPosts = groupBy(posts, (post) => post.date.getFullYear());

    return Object.entries(groupedPosts);
  });

  // Copy over favicon to build site
  eleventyConfig.addPassthroughCopy('favicon.ico');
};
