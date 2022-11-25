/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mvoll: ["'Vollkorn'", "Verdana", "sans-serif"],
      },
    },
  },
  plugins: [],
};
