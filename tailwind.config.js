/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                brown: "#8C766D",
                chocolate: "#4C4039",
                cream: "#EAE6E3",
                maroon: "#1D181C",
            },
            fontFamily: {
                sans: ["Graphik", "sans-serif"],
                serif: ["Merriweather", "serif"],
            },
            spacing: {
                "8xl": "96rem",
                "9xl": "128rem",
            },
            borderRadius: {
                "4xl": "2rem",
            },
            fontSize: {
                "12xl": "16rem", // Title fonts
                "10xl": "10rem", // medium fonts
            },
        },
        screens: {
            xs: "480px", // Custom breakpoint
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
    },
    plugins: [require("daisyui")],
};
