/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        error: "#FF4500",
      }
    },
    fontFamily: {
      ibm: [
        "IBM Plex Sans JP",
        "sans-serif",
      ]
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['dark'],
  }
}

