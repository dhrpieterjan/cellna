/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '481px',
        'md': '768px',
        'lg': '1025px',
        'xl': '1281px',
        '2xl': '1536px',
      },
      fontFamily: {
        'brandon': ['BrandonGrotesque_Regular', 'system-ui', 'sans-serif'],
        'brandon-thin': ['BrandonGrotesque_Thin', 'system-ui', 'sans-serif'],
        'brandon-bold': ['BrandonGrotesque_Bold', 'system-ui', 'sans-serif'],
        'brandon-medium': ['BrandonGrotesque_Medium', 'system-ui', 'sans-serif'],
        'brandon-black': ['BrandonGrotesque_Black', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#3C4146',
          600: '#2c3035',
          700: '#212529',
          800: '#1e2124',
          900: '#1a1d20',
        },
        secondary: {
          50: '#f8f9fa',
          100: '#F3F5F6',
          200: '#e5e8ea',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}