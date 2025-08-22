/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a4b81',
        secondary: '#2563EB',
        tertiary: '#0f0f0f',
      },
     fontFamily: {
  DMSans: ['DM_Sans', 'sans-serif'],
}

    },
  },
   plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}