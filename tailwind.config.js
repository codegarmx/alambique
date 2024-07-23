/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        title: 'Oswald',
        body: 'Merriweather',
        sans: 'Open Sans',
      },
      colors: {
        brown: '#c7a17a',
      },
    },
  },
  plugins: [],
}
