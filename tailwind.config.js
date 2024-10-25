/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-orange': '#F37022'
      },
      screens: {
        tablet: '768px',
        laptop: '1440px',
        desktop: '1920px',
        phone:  {'max': '390px'},
        laptop_max: {'max': '1440px'}
      }
    },
  },
  plugins: [],
}

