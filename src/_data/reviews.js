// const Airtable = require("airtable");
const fetch = require("node-fetch");
const chunk = require("lodash.chunk");

const Parser = require("rss-parser");
const cheerio = require("cheerio");
const fse = require("fs-extra");
const path = require("path");

const parser = new Parser();

const AIRTABLE_URL = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/reviews`;

function getMovieTitle(title) {
  return title.replace(/, \d{4} - (.*)$/, "");
}

function getMovieRating(title) {
  const rating = (title.match(/★/g) || []).length;
  const modifier = title.includes("½") ? 0.5 : 0;

  return rating + modifier;
}

function getImageUrl(content) {
  const $ = cheerio.load(content);
  const image = $("img")[0];
  return image ? image.attribs.src : "";
}

function getLatestReviews(feed) {
  let reviews = [];

  for (const review of feed) {
    const title = getMovieTitle(review.title);
    const rating = getMovieRating(review.title);
    const link = review.link;
    const date = Date.parse(review.isoDate);
    const imageUrl = getImageUrl(review.content);

    if (!imageUrl) continue;
    reviews.push({ title, rating, date, imageUrl, link });
  }

  return reviews;
}

async function getAirtableReviews() {
  const res = await fetch(AIRTABLE_URL, {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_KEY}`,
    },
  });
  const data = await res.json();
  return data.records.map((record) => record.fields);
}

async function insertNewReviews(reviews) {
  const chunkedReviews = chunk(reviews, 10);

  try {
    for await (reviewChunk of chunkedReviews) {
      await fetch(AIRTABLE_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: reviewChunk.map((review) => ({ fields: { ...review } })),
        }),
      });
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = async () => {
  const cacheFilePath = path.resolve(
    __dirname,
    "..",
    "..",
    "_datacache",
    "reviews.json"
  );

  let reviews = null;

  if (
    process.env.ELEVENTY_ENV === "development" &&
    (await fse.pathExists(cacheFilePath))
  ) {
    // Read file from cache.
    reviews = await fse.readJSON(cacheFilePath);
    console.log("Using from cache: " + cacheFilePath);
  }

  if (!reviews) {
    const airtableReviews = await getAirtableReviews();

    // Once we have the airtable reviews, get the latest revies from RSS feed
    const feed = await parser.parseURL(
      "https://letterboxd.com/itsleeohgee/rss/"
    );
    const feedReviews = getLatestReviews(feed.items);

    // Check if any of the movies from the RSS feed are not in Airtable
    const newReviews = feedReviews.filter((feedReview) => {
      return !airtableReviews.some((airtableReview) => {
        const feedReviewId = feedReview.title + feedReview.date;
        const airtableReviewId = airtableReview.title + airtableReview.date;
        return feedReviewId === airtableReviewId;
      });
    });

    await insertNewReviews(newReviews);

    const result = [...airtableReviews, ...newReviews];

    // If the website is being served, then we write the reviews to the cache.
    if (process.env.ELEVENTY_ENV === "development") {
      fse.writeJSON(cacheFilePath, result);
    }

    reviews = result;
  }

  return reviews;
};
