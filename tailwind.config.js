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
       borel : ['Borel',"cursive"],
       cookie : ['Cookie', "cursive"],
hand: ['Hi Melody', "cursive"],
inco: ['Inconsolata', "monospace"],
oleo: ['Oleo Script', "cursive"],
spartan :['League Spartan', "sans-serif"],
roboto :['Roboto Slab', "serif"]
      },
      colors :{
        peach : "#ffb3ac",
        seagreen : "#66a291",
        darkblue : "#2d325b",
        teal : "#264e70",
        pink : "#f9c5d1",
        red : "#d8314a"
      }
    },
  },
  plugins: [],
};
