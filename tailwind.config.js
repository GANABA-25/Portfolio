/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      inset: {
        65: "290",
        57: "220px",
        65: "273px",
        71: "270px",
        97: "400px",
        98: "580px",
        99: "470px",
        100: "425px",
        110: "600px",
      },
      width: {
        97: "700px",
        98: "3000px",
      },
      lineHeight: {
        12: "60px",
      },
      colors: {
        whiteGray: "#ffffff1a",
      },
    },
  },
  plugins: [],
};
