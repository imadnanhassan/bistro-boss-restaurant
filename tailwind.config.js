/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Maven Pro', 'sans-serif'],
        secondary: ['Cinzel', 'serif']
      },
      backgroundImage: theme => ({
        'header': "url('https://i.ibb.co/M5ZYGFM/02.jpg')"
      })
    },
  },
  plugins: [],
}

