module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        /* yellow */
        primary: {
          100: "#FDED8B",
          300:"#ffe000",
          400: "#fdc500"
        },
        /* black */
        secondery: {
          100: "#747476",
          200: "#19161d",
          300: "#151318",
          // footer
          400: "#10182f",
          500: "#a1add1"
        },
        /* white */
        light: {
          100: "#FAFAFA",
          200: "#E6E7E8"
        },
        darkMode: {
          100: '#E5E5E5',
          200: '#848484',
          300: '#FFC045',
          // 300: '#FFD700',
          400: '#1b1d26',
          500: '#393E46',
          600: '#141A34',
          700: '#1D1D1D',
          800: '#1B223F',
          900: '#272a34',
        },
        orange: {
          300: '#f59058',
          500: '#DB483B'
        }
      },
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
      },
      gridTemplateColumns: {
        13: 'repeat(13, minmax(0, 1fr))',
      },
      maxWidth: {
        xsm: '15rem',
        xxs: '17rem',
        xxxl: '70rem',
      },
      minWidth: {
        xxl: '1400px',
      },
      spacing: {
        '86': '21.5rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
