/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f8fbf4',
          100: '#e9f5db',
          200: '#cfe1b9',
          300: '#b5c99a',
          400: '#97a97c',
          500: '#87986a',
          600: '#718355',
          700: '#5e6d49',
          800: '#4a5539',
          900: '#36402a',
        },
        'brand-primary': '#718355',
        'brand-accent': '#97a97c',
        'brand-soft': '#e9f5db',
        'brand-dark': '#36402a',
        'brand-lime': '#b5c99a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      lineHeight: {
        'relaxed': '1.6',
        'loose': '1.7',
      },
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
