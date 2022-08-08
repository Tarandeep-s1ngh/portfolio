/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#5d23af",
        // secondary: "#c569d6",
        accent: "#f46849",
        bgmain: "#222222",
        bgSecondary: "#1a1a1c",
        mainText: "#d1d0d0",
        secondaryText: "#2d2d2d",
      },
    },
    fontFamily: {
      sans: ["Raleway"],
    },
  },
  plugins: [],
};
