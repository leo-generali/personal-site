import hljs from "highlight.js";

function tag(language) {
  return `<span class="absolute block right-4 top-4 bg-[#fec418] px-2 py-1 rounded-lg text-[#2f1e2e]">${LANGUAGE_MAP[language]}</span>`;
}

export default function formatMarkdown(markdown) {
  const md = require("markdown-it")({
    highlight: function (codeBlock, language) {
      if (language && hljs.getLanguage(language)) {
        try {
          return `<pre><code class="hljs text-sm rounded-lg relative">${tag(
            language
          )}${
            hljs.highlight(codeBlock, { language }, true).value
          }</code></pre>`;
        } catch (__) {}
      }
    },
  });

  return md.render(markdown);
}
