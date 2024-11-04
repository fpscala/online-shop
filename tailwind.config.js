/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F9565',
          50: '#F3FAF7',
          100: '#E7F4F0',
          200: '#C3E5D9',
          300: '#9FD5C1',
          400: '#57B593',
          500: '#0F9565',
          600: '#0E865B',
          700: '#09593D',
          800: '#07432D',
          900: '#052D1E',
        },
        secondary: {
          DEFAULT: '#FFA001',
          50: '#FFF3E6',
          100: '#FFE9C9',
          200: '#FFD5A9',
          300: '#FFCB7F',
          400: '#FFA001',
          500: '#FFA001',
          600: '#E69500',
          700: '#B36A00',
          800: '#7D4D00',
          900: '#4D2D00',
        },
      },
      fontFamily: {
        pthin: ['Poppins-Thin', 'sans-serif'],
        pextralight: ['Poppins-ExtraLight', 'sans-serif'],
        plight: ['Poppins-Light', 'sans-serif'],
        pregular: ['Poppins-Regular', 'sans-serif'],
        pmedium: ['Poppins-Medium', 'sans-serif'],
        psemibold: ['Poppins-SemiBold', 'sans-serif'],
        pbold: ['Poppins-Bold', 'sans-serif'],
        pextrabold: ['Poppins-ExtraBold', 'sans-serif'],
        pblack: ['Poppins-Black', 'sans-serif'],
      },
    },
    plugins: [],
  },
};
