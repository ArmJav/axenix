/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-orange': '#F37022',
        'light-grey-text': '#878786',
        'button-green': '#5EA350',
        'light-grey-button': '#E0E0E0',
      },
      screens: {
        tablet: '768px',
        laptop: '1440px',
        desktop: '1920px',
        phone:  {'max': '390px'},
        laptop_max: {'max': '1440px'}
      },
      fontFamily: {
        Montserrat: 'Montserrat, sans-serif',
      }
    },
  },
  plugins: [],
}

