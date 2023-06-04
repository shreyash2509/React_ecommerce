/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      colors:{
        'grey_1':'#666666',
      },
      spacing: {
        'imp7': '7px!important',
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
        '14': '3.5rem',
        '15': '5rem',
      }
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
      blacker:'1100',
    },
  },
  plugins: [],
}

