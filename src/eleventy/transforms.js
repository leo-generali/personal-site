const htmlmin = require("html-minifier");

const minifyHtml = (content, outputPath) => {
  if (outputPath.endsWith(".html")) {
    let minified = htmlmin.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true
    });
    return minified;
  }

  return content;
};

const frontHalfSpoilerBlock = `
  <div class="spoiler">
    <div class="spoiler__content">`;

const backHalfSpoilerBlock = `
    </div>
  </div>`;

const spoilerBlocks = content => {
  return content
    .replace(/SPOILER_START\b/g, frontHalfSpoilerBlock)
    .replace(/SPOILER_END\b/g, backHalfSpoilerBlock)
    .replace(/SPOILER_START_ESC\b/g, "SPOILER_START")
    .replace(/SPOILER_END_ESC\b/g, "SPOILER_END");
};

module.exports = { minifyHtml, spoilerBlocks };
