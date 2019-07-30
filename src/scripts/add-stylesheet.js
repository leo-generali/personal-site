const assets = require('../_data/assets.json');
const fs = require('fs');
const path = require('path');

const developmentStylesheet = () => {
  const filename = assets.App.css;
  return `<link rel="stylesheet" href=/assets/dist/${filename} />`;
};

const productionStylesheet = () => {
  const filename = path.join(
    __dirname,
    '..',
    '..',
    '_site',
    'assets',
    'dist',
    assets.App.css
  );

  const css = fs.readFileSync(filename, 'utf8', function(err, data) {
    if (err) console.log(err);
    return data;
  });

  return `<style>${css}</style>`;
};

module.exports = (environment) => {
  const map = {
    development: developmentStylesheet(),
    production: productionStylesheet()
  };

  return map[environment];
};
