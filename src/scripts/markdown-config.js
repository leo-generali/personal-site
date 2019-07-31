const markdownIt = require('markdown-it');
const markdownItFootnote = require('markdown-it-footnote');

const renderFootnoteRef = (tokens, idx, options, env, slf) => {
  const id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);
  const caption = slf.rules.footnote_caption(tokens, idx, options, env, slf);
  const refid = id;

  if (tokens[idx].meta.subId > 0) {
    refid += ':' + tokens[idx].meta.subId;
  }

  return `
    <sup id="a${id}">
      <a href="#f${refid}">${caption}</a>
    </sup>`;
};

const renderFootnoteBlockOpen = () => `
  <section>
  <hr>
  <strong>Footnotes:</strong>
  <ol class="footnotes">`;

const renderFootnoteBlockClose = () => `
  </ol>
  </section>`;

const renderFootnoteAnchor = (tokens, idx, options, env, slf) => {
  const id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);

  if (tokens[idx].meta.subId > 0) {
    id += ':' + tokens[idx].meta.subId;
  }

  return `<a href="#a${id}" class="footnotes__back">(Back)</a>`;
};

const renderFootnoteOpen = (tokens, idx, options, env, slf) => {
  var id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);

  if (tokens[idx].meta.subId > 0) {
    id += ':' + tokens[idx].meta.subId;
  }

  return `<li class="footnotes__item" id="f${id}">`;
};

const renderFootnoteClose = () => {
  return `</li>`;
};

module.exports = function(eleventyConfig) {
  const options = {
    html: true
  };

  const md = markdownIt(options).use(markdownItFootnote);

  md.renderer.rules.footnote_block_open = renderFootnoteBlockOpen;
  md.renderer.rules.render_footnote_block_close = renderFootnoteBlockClose;
  md.renderer.rules.footnote_ref = renderFootnoteRef;
  md.renderer.rules.footnote_anchor = renderFootnoteAnchor;
  md.renderer.rules.footnote_open = renderFootnoteOpen;
  md.renderer.rules.footnote_close = renderFootnoteClose;

  eleventyConfig.setLibrary('md', md);
};
