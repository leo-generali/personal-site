const link = (text, url, args) => {
  return `
    <a 
      href='${url}' 
      class='text-indigo-400 relative
      hover:text-indigo-600'>${text}</a>`;
};

const year = num =>
  `<span class='year block font-bold pl-4 text-3xl relative mb-4'>${num}</span>`;

module.exports = { link, year };
