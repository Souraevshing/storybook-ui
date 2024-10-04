const path = require("path");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [path.join(__dirname, "./src/**/*.(js|jsx|ts|tsx)")],
  plugins: [],

  /* Uncomment below for development when using tailwind as it will allow to render all the classes in UI,
    this will add all the tailwind classes so we can directly test it in Devtools easily,
    @Reference: https://tailwindcss.com/docs/content-configuration#safelisting-classes
  */
  // safelist: [
  //   {
  //     pattern: /^(.*?)/,
  //   },
  // ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Sofia Pro", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          green: "#189B77",
          "navy-blue": "#2D3047",
          blue: "#1A577E",
        },
        "base-white": "#F8F8F8",
        "light-grey": "#D9D9D9",
        "base-grey": "#F1F1F1",
        "base-off-blue": "#DBE5EB",
        "base-blue": "#C7D7E4",
        "link-blue": "#0077C3",
        "slate-gray": "#E5E5E5",
        "light-yellow": "#FDEDC5",
        "dark-grey": "#999999",
      },
    },
  },
  screens: {
    sm: "640px",
    // => @media (min-width: 640px) { ... }

    md: "768px",
    // => @media (min-width: 768px) { ... }

    lg: "1024px",
    // => @media (min-width: 1024px) { ... }

    xl: "1280px",
    // => @media (min-width: 1280px) { ... }

    "2xl": "1536px",
    // => @media (min-width: 1536px) { ... }
  },
  plugins: [],
};
