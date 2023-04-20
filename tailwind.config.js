/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      body: ['15px', '26px'],
      headingXS: ['18px', '24px'],
      headingS: ['20px', '24px'],
      headingM: ['32px', '32px'],
      headingL: ['40px', '40px'],
      headingXL: ['56px', '56px'],
    },
    colors: {
      almostWhite: '#FFFDFA',
      darkSpaceBlue: '#00001A',
      gunmetal: '#5E607A',
      lightVermillon: '#F15D51',
      silver: '#C5C6CE',
      yellow: '#E9AA52',
    },
    extend: {
      fontFamily: {
        sans: 'Inter',
      },
    },
  },
  plugins: [],
}
