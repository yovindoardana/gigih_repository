/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        spotify: ['Spotify', 'sans-serif']
      }
    }
  },
  plugins: []
};
