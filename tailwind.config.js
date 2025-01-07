/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
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

