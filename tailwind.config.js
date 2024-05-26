/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'defaultDP': "url('https://the-generals.s3.ap-southeast-2.amazonaws.com/default-display-picture.png')",
      },
    },
  },
  plugins: [],
}