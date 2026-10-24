
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          50: "#F6F8EE",
          100: "#E8EDCF",
          200: "#D4D68A",
          300: "#B9C36B",
          400: "#839D42",
          500: "#477B35",
          600: "#276B35",
          700: "#075B2A",
          800: "#064A24",
          900: "#03391C",
          950: "#012812",
        },
        gold: {
          DEFAULT: "#D4D68A",
          light: "#E8EDCF",
          dark: "#B9C36B",
        },
      },

      fontFamily: {
        heading: ["Roboto Condensed", "sans-serif"],
        sans: ["Montserrat", "sans-serif"],
      },

      backgroundImage: {
        "earth-gradient":
          "linear-gradient(to bottom right, #012812, #064A24, #075B2A)",

        "earth-glow":
          "radial-gradient(circle at 80% 20%, rgba(212,214,138,0.15), transparent 35%)",

        "earth-grid":
          "linear-gradient(rgba(212,214,138,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(212,214,138,0.07) 1px, transparent 1px)",
      },

      backgroundSize: {
        grid: "32px 32px",
      },

      boxShadow: {
        "earth-card": "0 12px 35px rgba(1, 40, 18, 0.10)",
        "earth-glow": "0 0 30px rgba(212, 214, 138, 0.12)",
      },

      animation: {
        "float-soft": "float-soft 5s ease-in-out infinite",
      },

      keyframes: {
        "float-soft": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-7px)",
          },
        },
      },
    },
  },
  plugins: [],
};
