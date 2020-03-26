const glob = require("glob");
const matter = require("gray-matter");

const env = process.env.ELEVENTY_ENV;
const isDevelopment = env === "development";

const TAGS_TO_FILTER = ["writing"];

module.exports = async () => {
  // Get paths to all posts
  const postPaths = await glob.sync("./src/writing/*/**.md");

  // Loop over every post
  const tags = postPaths
    .map(path => {
      // Get the front matter for each post
      const { data: frontMatter } = matter.read(path);
      const isPublished = frontMatter.published;

      // If we're on development and the post isn't published yet,
      // add the tags anyway
      if (isDevelopment || isPublished)
        return frontMatter.tags.filter(t => !TAGS_TO_FILTER.includes(t));

      // Return an empty array so we can still iterate over it
      return [];
    })
    // Flatten multi dimensional array into one
    .reduce((previousValue, currentValue) => [
      ...previousValue,
      ...currentValue
    ]);

  // Add a home page tag (/)
  return [...new Set([...tags.sort(), "/"])];
};
