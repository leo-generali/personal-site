const assets = require('../_data/assets.json');
const fs = require('fs');
const path = require('path');

module.exports = () => {
  const filename = assets.App.css;
  return `<link rel="stylesheet" href=/assets/dist/${filename} />`;
};

const inlineCss = () => {
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

  return css;
};

module.exports = inlineCss;
