/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "bg": "#121118",
        "primary": "#666FBF",

      },
      fontFamily: {
        QuicksandBold: ["QuicksandBold"],
        QuicksandRegular: ["QuicksandRegular"],
        QuicksandLight: ["QuicksandLight"],
        QuicksandMedium: ["QuicksandMedium"],
        QuicksandSemibold: ["QuicksandSemibold"],
      }

    },
  },
  plugins: [],
}

