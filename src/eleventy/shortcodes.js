const link = (text, url, args) => {
  return `
    <a 
      href='${url}' 
      class='text-indigo-400 font-semibold relative
      hover:text-indigo-600'>
      ${text}
    </a>`;
};

module.exports = { link };
