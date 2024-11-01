/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        emFont: ['"Old Standard TT"', 'serif'],
        Montserrat: ["Montserrat"],
      },
      colors: {
        'emColor': '#FEA82F',
        'emColorAlt': '#b56f0d', 
        'primo': '#f6f8fc',
        'logoColor': '#1C65C6',
      },
    }
  },
  plugins: []
};