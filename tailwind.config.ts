/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./public/index.html",
    ],
    theme: {
      extend: {
        animation: {
          move: "move 5s linear infinite",
        },
        keyframes: {
          move: {
            "0%": { transform: "translateX(-200px)" },
            "100%": { transform: "translateX(200px)" },
          },
        },
        colors: {
          primary: "#1D4ED8",
          secondary: "#9333EA"
        },
        spacing: {
          '128': '32rem',
          '144': '36rem',
          '99': '22rem',
          '98': '25rem',
          '100': '28rem',
          '110': '28.5rem',
          '111': '28.9rem',
          '120': '30rem',
          '122': '31rem',
          '129': '32rem',
          '130': '34rem',
          '134': '35.6rem',
          '135': '39.4rem',
          '160': '40rem',
          '168': '44rem',
          '165': '43rem',
          '170': '43.5rem',
          '192': '48rem',
          '224': '56rem',
          '256': '64rem',
          '260': '75rem',
          '300': '94rem',
          '301': '97.5rem'
        },
        width: {
          '128': '32rem',
          '160': '40rem',
          '192': '48rem',
          '224': '56rem',
          '256': '64rem',
        },
        height: {
          '128': '32rem',
          '160': '40rem',
          '170': '45rem',
          '192': '48rem',
          '224': '56rem',
          '256': '64rem',
        },
        fontSize: {
          '10xl': '10rem',
          '11xl': '11rem',
          '12xl': '20rem',
          '15xl': '40rem',
          '20xl': '56rem',
          '22xl': '64rem',
        },
        borderRadius: {
          'xl': '1.5rem',
        },
      },
    },
    plugins: [],
  };
  