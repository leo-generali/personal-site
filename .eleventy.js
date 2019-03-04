module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection('posts', (collection) => {
    return collection
      .getAllSorted()
      .reverse()
      .filter((item) => {
        return item.inputPath.match(/^\.\/posts\//) !== null;
      });
  });
};
