const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const CleanCSS = require('clean-css');
const moment = require('moment');

module.exports = function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);

  // Content Transforms
  eleventyConfig.addTransform(
    'htmlmin',
    require('./src/transforms/html-minify')
  );
  eleventyConfig.addTransform(
    'spoilerBlocks',
    require('./src/transforms/add-spoiler-blocks')
  );

  // Collections
  eleventyConfig.addCollection(
    'tagsList',
    require('./src/collections/get-all-tags')
  );
  eleventyConfig.addCollection(
    'postsByYear',
    require('./src/collections/posts-by-year')
  );

  // Filters
  eleventyConfig.addFilter('formatDate', (date) =>
    moment(date).format('MMMM D, YYYY')
  );
  eleventyConfig.addFilter('formatTag', require('./src/scripts/format-tag'));
  eleventyConfig.addShortcode(
    'addStylesheet',
    require('./src/scripts/add-stylesheet')
  );

  // Copy over favicon to build site
  eleventyConfig.addPassthroughCopy('favicon.ico');
  eleventyConfig.addPassthroughCopy('./src/img');

  // Configure markdown
  eleventyConfig.addPlugin(require('./src/scripts/markdown-config'));

  return {
    dir: {
      input: 'src',
      output: '_site'
    }
  };
};
