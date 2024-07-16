/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    extend: {
      colors: {
        'primary': 'var(--main-navy)',
        'primary-darker': 'var(--main-navyDarker)',
        'primary-border': 'var(--main-border)',
        'main-text': 'var(--main-text)',
        'bg-card': 'var(--cardBg)',
        'tertiary': '#E5E5E5',
        'quaternary': '#D9D9D9',
        'quinary': '#CFCFCF',
        'senary': '#BDBDBD',
        'septenary': '#B3B3B3',
        'octonary': '#AFAFAF',
      }

    },
  },
  plugins: [],
}