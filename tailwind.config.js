/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        tera: {
          500: "#f44250",
        },
      },
      screens: {
        xs: "360px",
      },
      dropShadow: {
        teralight: "0 0 1em rgb(200,25,191)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
