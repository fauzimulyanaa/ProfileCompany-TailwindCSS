/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        dark: "#1e293b",
        secondary: "#64748b",
        primary: "#14b8a6",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
