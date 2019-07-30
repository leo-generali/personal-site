const assets = require('../_data/assets.json');

module.exports = () => {
  const fileName = assets.App.css;
  return `/assets/dist/${fileName}`;
};
