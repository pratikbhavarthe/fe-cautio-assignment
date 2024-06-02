import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    screens: {
      xs: "320px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
};
