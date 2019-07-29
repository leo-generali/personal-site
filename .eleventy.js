const inclusiveLangPlugin = require('@11ty/eleventy-plugin-inclusive-language');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(inclusiveLangPlugin);
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

  // Copy over favicon to build site
  eleventyConfig.addPassthroughCopy('favicon.ico');
  eleventyConfig.addPassthroughCopy('./src/img');

  return {
    dir: {
      input: 'src',
      output: '_site'
    }
  };
};
