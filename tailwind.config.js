/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: {
            DEFAULT: "#37146B",
            "sidebar-text": "#F3ECFE",
            "sidebar-border": "#4D1B95",
            "sidebar-selected-route-bg": "#4D1B95",
            "sidebar-beta-tag-bg": "#6E27D5",
          },
          gray: {
            "page-bg": "#F8F8F8",
            border: "#EBEBEB",
            timesstamp: "#595959",
            "file-upload": "#BDBDBD",
          },
          green: {
            DEFAULT: "#00B88C",
          },
          yellow: {
            DEFAULT: "#F39C12",
          },
          red: {
            DEFAULT: "#E91F04",
          },
          pink: {
            DEFAULT: "#C9A0DC",
          },
        },
      },
    },
  },
  plugins: [],
};
