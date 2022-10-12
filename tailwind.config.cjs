/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    logs: true,
    themes: [
      {
        mytheme: {
          primary: "#c5d9f9",
          secondary: "#d3ea88",
          accent: "#fcb8ba",
          neutral: "#211B28",
          "base-100": "#383838",
          info: "#2F4FD0",
          success: "#54D990",
          warning: "#E28B08",
          error: "#FD6877",
        },
      },
    ],
  },
};
