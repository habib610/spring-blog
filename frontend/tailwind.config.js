/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", require("@headlessui/tailwindcss")],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
