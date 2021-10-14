const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/lib/format-markdown.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "blue-gray": colors.blueGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const colors = theme("colors");
      const spacing = theme("spacing");
      const utilities = {};

      for (const [color, shade] of Object.entries(colors)) {
        if (typeof shade === "string") {
          const key = `.bg-dotted-${color}`;
          utilities[key] = {
            backgroundImage: `radial-gradient(${shade} 35%, transparent 35%)`,
            backgroundSize: "0.25rem 0.25rem",
          };
          continue;
        }

        for (const [variant, hex] of Object.entries(shade)) {
          const key = `.bg-dotted-${color}-${variant}`;
          utilities[key] = {
            backgroundImage: `radial-gradient(${hex} 35%, transparent 35%)`,
            backgroundSize: "0.25rem 0.25rem",
          };
        }
      }

      addUtilities(utilities, ["hover"]);
    }),
  ],
};
