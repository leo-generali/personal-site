const frontHalfSpoilerBlock = `
  <div class="spoiler">
    <div class="spoiler__content">`;

const backHalfSpoilerBlock = `
    </div>
  </div>`;

module.exports = (content, outputPath) => {
  const newContent = content
    .replace(/SPOILER_START\b/g, frontHalfSpoilerBlock)
    .replace(/SPOILER_END\b/g, backHalfSpoilerBlock)
    .replace(/SPOILER_START_ESC\b/g, 'SPOILER_START')
    .replace(/SPOILER_END_ESC\b/g, 'SPOILER_END');

  return newContent;
};
