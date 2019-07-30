const groupBy = require('lodash.groupby');

module.exports = (collection) => {
  const posts = collection
    .getFilteredByGlob('src/writing/**/*.md')
    .filter((post) => {
      if (process.env.ELEVENTY_ENV === 'production') {
        return post.data.published;
      }

      return true;
    })
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
