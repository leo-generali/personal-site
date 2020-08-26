const Parser = require("rss-parser");
const path = require("path");
const cheerio = require("cheerio");

const AIRTABLE_URL = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/reviews`;
const CACHE_FILE_PATH = path.resolve(
  __dirname,
  "../../_datacache",
  "reviews.json"
);

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

async function getLatestReviewsFromRSSFeed() {
  const parser = new Parser();
  const feed = await parser.parseURL("https://letterboxd.com/itsleeohgee/rss/");
  const reviews = await getLatestReviews(feed.items);
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

function getReviewsNotInAirtable(airtableReviews, rssFeedReviews) {
  return rssFeedReviews.filter((rssFeedReview) => {
    return !airtableReviews.some((airtableReview) => {
      const feedReviewId = rssFeedReview.title + rssFeedReview.date;
      const airtableReviewId = airtableReview.title + airtableReview.date;
      return feedReviewId === airtableReviewId;
    });
  });
}

module.exports = {
  CACHE_FILE_PATH,
  getAirtableReviews,
  getLatestReviewsFromRSSFeed,
  getReviewsNotInAirtable,
};
