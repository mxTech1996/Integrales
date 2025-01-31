/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        hero: "calc(100vh - 104px)",
      },
      colors: {
        primary: "#3c4ae7", // Azul crema
        secondary: "#ff2828", // azul cielo
        third: "#3c4ae7", // Azul claro
        black: "#001", // Gris oscuro
      },

      backgroundImage: {
        hero: 'url("/images/mesa1.jpeg")',
        details: 'url("/images/mesa2.jpeg")',
      },
      fontFamily: {
        nunito: ["var(--font-nunito)"],
        urbanist: ["var(--font-urbanist)"],
      },
    },
  },
};
