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
          300: '#FFD369',
          400: '#181A1B',
          500: '#393E46',
          600: '#121212',
          700: '#1D1D1D',
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
        xxs: '17rem'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
