const link = (text, url) => {
  return `
    <a 
      href='${url}' 
      class='text-indigo-400 hover:text-indigo-600'>${text}</a>`;
};

const year = (num) =>
  `<span class='year block font-bold pl-4 text-3xl relative mb-4'>${num}</span>`;

const spoiler = (content) =>
  `<aside class="spoiler relative"><div>${content}</div></aside>`;

module.exports = { link, year, spoiler };
