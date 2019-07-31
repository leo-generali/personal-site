module.exports = (collection) => {
  let tagSet = new Set();

  collection.getFilteredByGlob('src/writing/**/*.md').forEach((item) => {
    if (item.data.published && 'tags' in item.data) {
      item.data.tags.forEach((tag) => {
        tagSet.add(tag);
      });
    }
  });

  return [...tagSet];
};
