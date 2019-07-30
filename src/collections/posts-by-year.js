const groupBy = require('lodash.groupby');

module.exports = (collection) => {
  const posts = collection
    .getFilteredByGlob('src/writing/**/*.md')
    .map((post) => {
      const { published } = post.data;
      post.data.title = published
        ? post.data.title
        : `${post.data.title} - DRAFT`;
      return post;
    })
    .reverse();

  const groupedPosts = groupBy(posts, (post) => post.date.getFullYear());

  return Object.entries(groupedPosts);
};
