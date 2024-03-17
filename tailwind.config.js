/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        "custom-ease-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      customButton: {
        className: 'bg-custom-button-bg text-custom-button-text hover:bg-green-600 rounded-custom-button shadow-custom-button transition-all duration-300 ease-out',
      },
    },
  },
  plugins: [],
};
