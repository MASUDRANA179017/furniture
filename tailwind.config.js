/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
     
    },
    extend: {
      fontFamily: {
        primaryFont: ["DM Sans", "sans-serif"],
      },
      colors: {
        black: "#262626",
        gray: "#767676",
        gray6d: "#6D6D6D",
        white: "#FFFFFF",
        topBarBg: "#F5F5F3",
        borderColor: "#F0F0F0"
      },
    },
  },
  plugins: [],
};
