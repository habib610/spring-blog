/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                xs: "375px",
            },
            width: {
                1600: "1600px",
                400: "400px",
                450: "450px",
                210: "210px",
                550: "550px",
                260: "260px",
                650: "650px",
            },
            height: {
                600: "600px",
                280: "280px",
                900: "900px",
                458: "458px",
            },
            top: {
                "50%": "50%",
            },
            fontFamily: {
                sans: ["var(--font-inter)", ...fontFamily.sans],
            },
        },
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
