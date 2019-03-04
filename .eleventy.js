const moment = require('moment');
const groupBy = require('lodash.groupby');

module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection('postsByYear', (collection) => {
    const posts = collection
      .getAllSorted()
      .filter((item) => item.inputPath.match(/^\.\/posts\//) !== null)
      .map((post) => {
        const o = Object.assign({}, post);
        o.readableDate = moment(post.date).format('MMMM D, YYYY');
        return o;
      })
      .reverse();

    const groupedPosts = groupBy(posts, (post) => post.date.getFullYear());

    return Object.entries(groupedPosts);
  });
};
