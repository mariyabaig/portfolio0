// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        freehand: ["Freehand", "cursive"],
      },
      colors :{
        peach : "#ffb3ac",
        seagreen : "#66a291",
      }
    },
  },
  plugins: [],
};
