/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F97316',  // orange-500 warm & inviting
          dark: '#B45309',     // orange-700 darker for hover
          light: '#ffffff',    // orange-100 soft background tint
        },
        secondary: {
          DEFAULT: '#0F766E',  // teal-700 calm & trustworthy
          dark: '#14532D',     // teal-900 dark rich for hover
          light: '#CCFBF1',    // teal-100 very light background tint
        },
        background: {
          light: '#ffffff',    // changed to pastel light blue
          dark: '#0F172A',     // deep navy dark mode bg
          darkLight: '#1E293B',// navy lighter dark bg for panels
        },
        text: {
          light: '#1F2937',    // gray-800 charcoal for light mode text
          muted: '#4B5563',    // gray-600 muted text for light mode
          dark: '#E0E7FF',     // light periwinkle for dark mode text
          mutedDark: '#94A3B8',// gray-400 muted for dark mode
        },
        button: {
          primary: '#F97316',  // same as primary DEFAULT (orange)
          secondary: '#0F766E',// same as secondary DEFAULT (teal)
        }
      },
    },
  },
  plugins: [],
}
