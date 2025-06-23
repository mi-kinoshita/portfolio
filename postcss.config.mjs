/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {
      darkMode: "class",
      theme: {
        extend: {},
      },
    },
  },
};
export default config;
