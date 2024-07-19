/** @type {import('tailwindcss').Config} */
const withOpacity = (variableName, alpha) => ({ opacityValue }) => {
  if (alpha) {
    return `rgba(var(${variableName}), ${alpha})`;
  }
  if (opacityValue !== undefined) {
    return `rgba(var(${variableName}), ${opacityValue})`;
  }
  return `rgb(var(${variableName}))`;
};


module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        spin: 'spin 2s linear infinite',
      },
      colors: {
        primary: withOpacity("--color-primary"),
        "primary-50": withOpacity("--color-primary", 0.05),
        "primary-100": withOpacity("--color-primary", 0.1),
        "primary-200": withOpacity("--color-primary", 0.2),
        "primary-300": withOpacity("--color-primary", 0.3),
        "primary-400": withOpacity("--color-primary", 0.4),
        "primary-500": withOpacity("--color-primary", 0.5),
        "primary-600": withOpacity("--color-primary", 0.6),
        "primary-700": withOpacity("--color-primary", 0.7),
        "primary-800": withOpacity("--color-primary", 0.8),
        "primary-900": withOpacity("--color-primary", 0.9),
        secondary: withOpacity("--color-secondary"),
        "secondary-50": withOpacity("--color-secondary", 0.05),
        "secondary-100": withOpacity("--color-secondary", 0.1),
        "secondary-200": withOpacity("--color-secondary", 0.2),
        "secondary-300": withOpacity("--color-secondary", 0.3),
        "secondary-400": withOpacity("--color-secondary", 0.4),
        "secondary-500": withOpacity("--color-secondary", 0.5),
        "secondary-600": withOpacity("--color-secondary", 0.6),
        "secondary-700": withOpacity("--color-secondary", 0.7),
        "secondary-800": withOpacity("--color-secondary", 0.8),
        "secondary-900": withOpacity("--color-secondary", 0.9),
        line: 'rgb(205, 205, 205)',
        font: 'rgb(49, 49, 49)',
        error: 'rgb(239, 68, 68)'
      },
      transitionProperty: {
        grid: 'grid-template-rows,padding',
        height: 'height',
        top: 'top'
      }
    },
  },
  plugins: [],
}