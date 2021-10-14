import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import formatMarkdown from "./format-markdown";

const POSTS_DIRECTORY = join(process.cwd(), "src", "_posts");

function getPostSlugs() {
  return fs.readdirSync(POSTS_DIRECTORY);
}

export function getPostBySlug(slug, fields = []) {
  const path = join(POSTS_DIRECTORY, slug);
  const post = fs.readFileSync(path, "utf8");
  const { data: frontMatter, content } = matter(post);

  const items = {};

  for (const field of fields) {
    if (field === "slug") {
      items[field] = slug.replace(".md", "");
    }

    if (field === "content") {
      items[field] = formatMarkdown(content);
    }

    if (frontMatter[field]) {
      items[field] = frontMatter[field];
    }
  }

  return items;
}

export function getPosts(fields) {
  const posts = [];
  const slugs = getPostSlugs();

  for (const slug of slugs) {
    const post = getPostBySlug(slug, fields);
    posts.push(post);
  }

  return posts;
}
