import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const CONTENT_DIRECTORY = join(process.cwd(), "src", "_content");

export async function getContent(slug) {
  const path = join(CONTENT_DIRECTORY, `${slug}.mdx`);
  const page = fs.readFileSync(path, "utf8");
  const { content } = matter(page);
  return await serialize(content);
}
