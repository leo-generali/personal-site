const fetch = require("node-fetch");
const chunk = require("lodash.chunk");
const fse = require("fs-extra");

const {
  CACHE_FILE_PATH,
  AIRTABLE_URL,
  getLatestReviewsFromRSSFeed,
  getReviewsNotInAirtable,
  getAirtableReviews,
} = require("../_eleventy/reviews");

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
  let reviews = null;

  // Get data from cache if we are developing locally. This way we
  // avoid unnecessarily hitting the API
  if (
    process.env.ELEVENTY_ENV === "development" &&
    (await fse.pathExists(CACHE_FILE_PATH))
  ) {
    // Read file from cache.
    reviews = await fse.readJSON(CACHE_FILE_PATH);
    console.log("Using from cache: " + CACHE_FILE_PATH);
  }

  // For production builds fetch the latest reviews in the Airtable
  // and from the RSS feed. This will give us the most up to date review data.
  if (!reviews) {
    const airtableReviews = await getAirtableReviews();
    const feedReviews = await getLatestReviewsFromRSSFeed();

    const newReviews = getReviewsNotInAirtable(airtableReviews, feedReviews);

    await insertNewReviews(newReviews);

    const result = [...airtableReviews, ...newReviews].sort(
      (a, b) => b.date - a.date
    );

    // If the website is being served, then we write the reviews to the cache.
    if (process.env.ELEVENTY_ENV === "development") {
      fse.writeJSON(CACHE_FILE_PATH, result);
    }

    reviews = result;
  }

  return reviews;
};
