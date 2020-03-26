const inquirer = require("inquirer");
const fs = require("fs");
const jsToYaml = require("json-to-pretty-yaml");
const prettier = require("prettier");
const chalk = require("chalk");

// Utils
const slugify = text =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text

const success = chalk.bold.green.inverse;

const newPost = async () => {
  const args = process.argv;
  if (args.length < 3) {
    // Get the title and category for the blog post
    const { title, type, tags } = await inquirer.prompt([
      { type: "input", name: "title", message: "Post Title:" },
      { type: "input", name: "type", message: "Post Type:" },
      { type: "input", name: "tags", message: "Post Tags (comma seperated):" }
    ]);

    // Turn the title into the slug
    const slug = slugify(title);

    // Create path for post based on when it was created
    const createDate = new Date();
    const year = createDate.getFullYear();
    const postPath = `./writing/${year}`;

    // Turn the tags into an array
    const tagsArr = tags.split(",").map(tag => tag.trim());

    // If the file year doesn't exist, automatically create it
    if (!fs.existsSync(postPath)) {
      fs.mkdirSync(postPath, {
        recursive: true
      });
    }

    // Create the front matter for the post
    const frontMatter = jsToYaml.stringify({
      date: createDate.toISOString(),
      pageTitle: title,
      type: type,
      published: false,
      tags: tagsArr,
      footnotes: []
    });

    // Create the post
    const initialMarkdownPostTemplate = prettier.format(
      `---\n${frontMatter}\n---\n`,
      {
        parser: "markdown"
      }
    );

    // Write the post to disk
    fs.writeFileSync(`${postPath}/${slug}.md`, initialMarkdownPostTemplate);
    success(`Post ${title} was created successfully`);
  }
};

newPost();
