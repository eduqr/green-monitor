/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        bgCard: {
          addPlant: "#C6F2ED",
          allGood: "#56876D",
          alert: "#FFED8C",
        },
        textCard: {
          addPlant: "#004E45",
          allGood: "#3B5720",
          alert: "#674708",
        },
        bgHeader: {
          default: "#E6FACB",
        },
      },
      fontFamily: {
        title: ["Junge", "sans-serif"],
        subtitle: ["Nunito", "sans-serif"],
        text: ["Hind", "sans-serif"],
      },
    },
  },
  plugins: [],
};
