module.exports = tag => {
  const tagMap = { javascript: "JavaScript" };
  return tagMap[tag] || tag.charAt(0).toUpperCase() + tag.slice(1);
};
