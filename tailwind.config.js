/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation:{
        'fade-in-down' : 'fade-in-down 0.5s ease-in-out forwards',
        'threeD': 'threeD 0.2s ease-in-out forwards',
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
        'threeD': {
          '0%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(1.3)',
          },
        },
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'lexend': ['Lexend', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(90% 90% at 50% 10%, #111827 40%, #0277b4 100%)',
      },
  },
  plugins: [],
}
}

