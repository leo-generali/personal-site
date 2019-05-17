const groupBy = require('lodash.groupby');

module.exports = (collection) => {
  const posts = collection
    .getAllSorted()
    .filter((item) => item.inputPath.match(/^\.\/writing\//) !== null)
    .reverse();

  const groupedPosts = groupBy(posts, (post) => post.date.getFullYear());

  return Object.entries(groupedPosts);
};
