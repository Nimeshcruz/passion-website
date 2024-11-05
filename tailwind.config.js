/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#ff0037",
        "light-red": "#ff888c",
        black: "#101010",
        dark: "#000000",
        gray: "#8f8f8f",
        white: "#fbfdf5",
        yellow: "#eeff00",
        transparent: "transparent",
      },
      maxWidth: {
        "7xl": "120em",
      },
      fontFamily: {
        Trap: ["var(--font-trap)"],
      },
      screens: {
        mob: { raw: "(max-width: 1024px)" },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
