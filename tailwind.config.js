/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
      },
    },
  },
  content: ["./src/**/*.{html,js,svelte,ts}"],
  plugins: [],
};
