const groupBy = require('lodash.groupby');

module.exports = (collection) => {
  const posts = collection.getFilteredByGlob('src/writing/**/*.md').reverse();

  const groupedPosts = groupBy(posts, (post) => post.date.getFullYear());

  return Object.entries(groupedPosts);
};
