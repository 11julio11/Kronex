/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'carbon-black': '#1a1a1a',
        'electric-blue': '#0066ff',
        'titanium-gray': '#6b7280',
        'pure-white': '#ffffff',
        'neon-cyan': '#00ffff',
        // Mantener gold para compatibilidad
        gold: '#0066ff',
        black: '#1a1a1a',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};