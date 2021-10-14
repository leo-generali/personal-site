import { getPosts } from "@/lib/posts";

export function getTags() {
  const posts = getPosts(["slug", "tags"]);
  const tags = new Set();

  for (const post of posts) {
    post.tags.forEach((tag) => tags.add(tag));
  }

  return tags;
}
