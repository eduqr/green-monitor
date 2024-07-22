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
          allGood: "#E2FF6E",
          alert: "#FFED8C",
        },
      },
    },
  },
  plugins: [],
};
