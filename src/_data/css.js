const sass = require('node-sass');
const path = require('path');

module.exports = async () => {
  const result = sass.renderSync({
    file: path.join(__dirname, '..', 'assets', 'styles', 'theme.scss')
  });

  if (!result.css) {
    console.log('Error compiling stylesheet');
    return 'Error compiling stylesheet';
  }

  console.log(result.css.toString());

  return result.css.toString();
};
