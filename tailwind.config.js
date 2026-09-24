/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'medical-blue': {
          950: '#0a192f',
          900: '#112240',
          800: '#233554',
          500: '#3b82f6'
        },
        'healing-green': {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        'action-orange': {
          500: '#f97316',
          600: '#ea580c',
        }
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
        'frutiger-aurora': 'radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.15) 0%, rgba(10, 25, 47, 0) 70%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
        'glass-inset': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}
