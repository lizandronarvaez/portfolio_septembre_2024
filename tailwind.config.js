/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounceY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(100%)' },  // Cambia 100% si quieres que baje más o menos
        },
      },
      animation: {
        bounceY: 'bounceY 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}