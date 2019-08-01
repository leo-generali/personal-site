const axios = require('axios');
const cheerio = require('cheerio');
const flatcache = require('flat-cache');
const path = require('path');

const getCacheKey = () => {
  const date = new Date();
  return `${date.getUTCFullYear()}-${date.getUTCMonth() +
    1}-${date.getUTCDate()}`;
};

const fetchData = async () => {
  console.log('Fetching new strava data...');

  const cache = flatcache.load(
    'personal-strava-data',
    path.resolve('./_datacache')
  );
  const key = getCacheKey();
  const result = await axios.get('https://www.strava.com/athletes/11876587');
  const $ = cheerio.load(result.data);

  const data = $(`div`)
    .filter(function() {
      return $(this).data('reactClass') === 'AthleteProfileApp';
    })
    .data('react-props');

  const latestRun = data.recentActivities.filter(
    (activity) => activity.type === 'run'
  )[0];

  cache.setKey(key, latestRun);
  cache.save();

  return latestRun;
};

const createEleventyData = (activity) => {
  const distance = activity.distance.substring(0, activity.distance.length - 3);
  const url = `https://www.strava.com/activities/${activity.id}`;
  return { distance, url };
};

module.exports = async function() {
  const cache = flatcache.load(
    'personal-strava-data',
    path.resolve('./_datacache')
  );
  const key = getCacheKey();
  let cachedData = cache.getKey(key);
  if (!cachedData) {
    cachedData = await fetchData();
  }
  return createEleventyData(cachedData);
};
