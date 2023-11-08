/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        darkslategray: {
          "100": "#005643",
          "200": "rgba(0, 48, 37, 0.01)",
        },
        red: "#fc0e0e",
        darkcyan: "rgba(9, 152, 152, 0.99)",
        burlywood: "#e9cc8a",
      },
      spacing: {},
      fontFamily: {
        inika: "Inika",
        "inria-serif": "'Inria Serif'",
        "inknut-antiqua": "'Inknut Antiqua'",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
      },
    },
    fontSize: {
      mid: "17px",
      "21xl": "40px",
      "11xl": "30px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
