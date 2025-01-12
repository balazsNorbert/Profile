/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation:{
        'fade-in-down' : 'fade-in-down 0.5s ease-in-out forwards',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: 0,
            translate: 0,
          },
          '100%': {
            opacity: 1,
            translate: 'none',
          },
        },
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'lexend': ['Lexend', 'sans-serif'],
      },
      backgroundImage: {
        'bgImage': "url('./src/assets/jpg/background-image-1.jpg')",
      }
  },
  plugins: [],
}
}

