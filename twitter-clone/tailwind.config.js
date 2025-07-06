/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        twitter: {
          blue: '#1DA1F2',
          darkBlue: '#1A91DA',
          lightBlue: '#E8F5FE',
          dark: '#15202B',
          darker: '#192734',
          light: '#F7F9FA',
          gray: '#657786',
          lightGray: '#AAB8C2',
          extraLightGray: '#E1E8ED',
          green: '#17BF63',
          red: '#E0245E',
          orange: '#FF6600',
          yellow: '#FFAD1F',
        }
      },
      fontFamily: {
        'twitter': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'twitter-xs': '13px',
        'twitter-sm': '14px',
        'twitter-base': '15px',
        'twitter-lg': '17px',
        'twitter-xl': '19px',
        'twitter-2xl': '23px',
      },
      spacing: {
        '15': '3.75rem',
        '18': '4.5rem',
        '88': '22rem',
      },
      maxWidth: {
        'twitter': '1200px',
        'tweet': '504px',
      },
      borderRadius: {
        'twitter': '9999px',
      }
    },
  },
  plugins: [],
}
