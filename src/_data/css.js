const sass = require('node-sass');
const path = require('path');

module.exports = async () => {
  const sassPath = path.join(__dirname, '..', 'assets', 'styles', 'theme.scss');

  const options = {
    file: sassPath,
    outputStyle: 'compressed',
    sourceComments: false
  };

  const result = sass.renderSync(options);

  if (!result.css) {
    console.log('Error compiling stylesheet');
    return 'Error compiling stylesheet';
  }

  return result.css.toString();
};
