/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        agri: {
          50: '#f2f9f4',
          100: '#e1f2e6',
          200: '#c5e6ce',
          300: '#99d2aa',
          400: '#64b67f',
          500: '#3e9b5c',
          600: '#2d7c47',
          700: '#1b5e32',
          800: '#194b2a',
          900: '#153e24',
          dark: '#0f4726',
          primary: '#15803d',
          accent: '#10b981',
          lightBg: '#f6fbf7',
        },
        cardBg: '#ffffff',
        borderMuted: '#f0f2f5',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.03)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'elevated': '0 10px 30px -5px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      }
    },
  },
  plugins: [],
}
