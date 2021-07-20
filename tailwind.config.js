module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        /* yellow */
        primary: {
          100: "#FDED8B",
          300:"#ffe000",
        },
        /* black */
        secondery: {
          100: "#747476",
          200: "#19161d",
          300: "#151318",
        },
        /* white */
        light: {
          100: "#E6E7E8",
        },
      },
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
      },
      gridTemplateColumns: {
        13: 'repeat(13, minmax(0, 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
