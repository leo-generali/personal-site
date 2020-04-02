const moment = require("moment");

const tagMap = { javascript: "JavaScript" };
const env = process.env.ELEVENTY_ENV;
const isDevelopment = env === "development";

const keys = obj => Object.keys(obj);

const formatDate = (date, format) => moment(date).format(format);

const formatTag = tag => {
  return tagMap[tag] || tag.charAt(0).toUpperCase() + tag.slice(1);
};

const log = content => {
  console.log(content);
};

const publishedPosts = posts =>
  posts.filter(post => {
    if (isDevelopment) return true;

    return post.data.published;
  });

module.exports = { keys, formatDate, formatTag, log, publishedPosts };
