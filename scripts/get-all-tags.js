module.exports = (collection) => {
  let tagSet = new Set();

  collection.getAll().forEach((item) => {
    if (item.data.published) {
      if ('tags' in item.data) {
        item.data.tags.forEach((tag) => {
          tagSet.add(tag);
        });
      }
    }
  });

  tagSet.delete('projects');

  return [...tagSet];
};