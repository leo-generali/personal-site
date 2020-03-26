const moment = require("moment");

const tagMap = { javascript: "JavaScript" };

const keys = obj => Object.keys(obj);
const formatDate = (date, format) => moment(date).format(format);
const formatTag = tag => {
  return tagMap[tag] || tag.charAt(0).toUpperCase() + tag.slice(1);
};
const log = content => {
  console.log(content);
};

module.exports = { keys, formatDate, formatTag, log };
