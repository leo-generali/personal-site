const markdownIt = require("markdown-it");
const markdownItFootnote = require("markdown-it-footnote");
const markdownItContainer = require("markdown-it-container");

const renderFootnoteRef = (tokens, idx, options, env, slf) => {
  const id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);
  const caption = slf.rules.footnote_caption(tokens, idx, options, env, slf);
  const refid = id;

  if (tokens[idx].meta.subId > 0) {
    refid += ":" + tokens[idx].meta.subId;
  }

  return `
    <sup class="text-indigo-400 hover:text-indigo-600" id="a${id}">
      <a class="footnote-link" href="#f${refid}">${caption}</a>
    </sup>`;
};

const renderFootnoteBlockOpen = () => `
  <section class='mt-20'>
  <hr>
  <strong class='block mt-6'>Footnotes:</strong>
  <ol class="pl-4">`;

const renderFootnoteBlockClose = () => `
  </ol>
  </section>`;

const renderFootnoteAnchor = (tokens, idx, options, env, slf) => {
  const id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);

  if (tokens[idx].meta.subId > 0) {
    id += ":" + tokens[idx].meta.subId;
  }

  return `<a href="#a${id}" class="ml-1 text-indigo-400 hover:text-indigo-600 text-xs font-semibold">(Back)</a>`;
};

const renderFootnoteOpen = (tokens, idx, options, env, slf) => {
  var id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);

  if (tokens[idx].meta.subId > 0) {
    id += ":" + tokens[idx].meta.subId;
  }

  return `<li id="f${id}">`;
};

const renderFootnoteClose = () => {
  return `</li>`;
};

module.exports = function (eleventyConfig) {
  const options = {
    html: true,
  };

  const md = markdownIt(options)
    .use(markdownItFootnote)
    .use(markdownItContainer, "preface", {
      render: function (tokens, idx) {
        if (tokens[idx].nesting === 1) {
          return `<div class="preface bg-gray-200 p-4 rounded-md">`;
        } else {
          return "</div>";
        }
      },
    })
    .use(markdownItContainer, "spoiler", {
      render: function (tokens, idx) {
        if (tokens[idx].nesting === 1) {
          return `<aside class="spoiler relative"><div>`;
        } else {
          return "</div></aside>";
        }
      },
    });

  md.renderer.rules.footnote_block_open = renderFootnoteBlockOpen;
  md.renderer.rules.render_footnote_block_close = renderFootnoteBlockClose;
  md.renderer.rules.footnote_ref = renderFootnoteRef;
  md.renderer.rules.footnote_anchor = renderFootnoteAnchor;
  md.renderer.rules.footnote_open = renderFootnoteOpen;
  md.renderer.rules.footnote_close = renderFootnoteClose;

  eleventyConfig.setLibrary("md", md);
};
