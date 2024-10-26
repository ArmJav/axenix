/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'figma-green': '#108A00',
        'light-green': '#D5E0D5',
        'text': '#001E00',
        'figma-purple': '#6F89F0',
        'figma-grey': '#878786',
        'yellow': '#F37022',
        'pixso-grey': '#E0E0E0'

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

