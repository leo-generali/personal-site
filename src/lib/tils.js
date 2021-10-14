import formatMarkdown from "./format-markdown";
import fs from "fs";
import { join, parse } from "path";
import glob from "fast-glob";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const TIL_DIRECTORY = join(process.cwd(), "src", "_til");

const DATE_OPTIONS = {
  LONG: { weekday: "long", year: "numeric", month: "long", day: "numeric" },
  SHORT: {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  },
};

function getTILPaths() {
  return glob.sync(`${TIL_DIRECTORY}/**/*.{md,mdx}`);
}

function getSlugAndTopicFromPath(path) {
  const pathArr = path.split("/");
  const slug = parse(pathArr[pathArr.length - 1]).name;
  const topic = pathArr[pathArr.length - 2];

  return { topic, slug };
}

function getDate(dateAsString) {
  const [month, day, year] = dateAsString.split("/");
  const date = new Date(year, Number(month) - 1, day);
  return {
    long: date.toLocaleString("en-US", DATE_OPTIONS.LONG),
    short: date.toLocaleString("en-US", DATE_OPTIONS.SHORT),
    milliseconds: date.getTime(),
  };
}

export async function getTopics() {
  const topics = new Set();
  const tils = await getTILs(["topic"]);

  for (const { topic } of tils) {
    topics.add(topic);
  }

  return [...topics].sort();
}

export async function getTILBySlug(path, fields = []) {
  const post = fs.readFileSync(path, "utf8");
  const { data: frontMatter, content } = matter(post);
  const { topic, slug } = getSlugAndTopicFromPath(path);

  const items = {};

  items.date = getDate(frontMatter.changelog[0].date);

  for (const field of fields) {
    if (field === "slug") {
      items[field] = `${topic}/${slug}`;
    }

    if (field === "content") {
      items[field] = await serialize(content);
    }

    if (field === "topic") {
      items.topic = topic;
    }

    if (frontMatter[field]) {
      items[field] = frontMatter[field];
    }
  }

  return items;
}

function sortTILsByDate(tilA, tilB) {
  return tilB.date.milliseconds - tilA.date.milliseconds;
}

export async function getTILs(fields) {
  const tils = [];
  const paths = getTILPaths();

  for (const path of paths) {
    const til = await getTILBySlug(path, fields);
    tils.push(til);
  }

  tils.sort(sortTILsByDate);

  return tils;
}
