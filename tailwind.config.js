/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#fff8b9',
        notebookLine: '#8CBED6',
        ink: '#222222',
        olive: '#558203',
        gray: '#A6A6A6',
        marker: '#558203',
        ias: {
          blue: '#00629a',
          green: '#00964d',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'Montserrat', 'sans-serif'],
        hand: ['Kalam', 'Caveat', 'cursive'],
        marker: ['"Permanent Marker"', 'cursive'],
      },
      backgroundImage: {
        notebook:
          'repeating-linear-gradient(to bottom, transparent, transparent 27px, #8CBED6 27px, #8CBED6 28px)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
