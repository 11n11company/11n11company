/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        agency: {
          bg: '#FFFFFF',
          'bg-subtle': '#FAFAFA',
          'bg-muted': '#F5F5F5',
          black: '#0A0A0A',
          dark: '#141414',
          muted: '#666666',
          secondary: '#888888',
          border: '#E8E8E8',
          'border-light': '#F0F0F0',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        editorial: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'widest-editorial': '0.2em',
        'widest-subtle': '0.15em',
      },
      boxShadow: {
        'subtle-device': '0 25px 50px -12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04)',
        'phone-device': '0 20px 40px -10px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
