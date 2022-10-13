/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {

    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    }, 
    colors: {
      'black': '#000',
      'white': '#FFFFFF',

      'gray-200': '#9F9FB2',
      'gray-600': '#7C7C8A',
      'gray-700': '#161618',
      'gray-800': '#202024',
      'gray-900': '#121214',

      'cyan-300': '#A4EBFF',
      'cyan-500': '#5FD4F4',

      'purple-100': '#BB5FF4',

      'yellow-strong': '#F4CA5F',
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
