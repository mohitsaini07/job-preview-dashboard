/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DC4A2D",
        "gray-500": "#D0D5DD",
        "gray-200": "#E7E7E7",
        "gray-100": "#D1D1D1",
        "gray-300": "#888888",
        "gray-400": "#6E6D6D",
        "gray-600": "#3D3D3D",
        "orange-600": "#DC4A2D",
        "muted-orange": "#FCB4A5",
        "gray-50": "#B0B0B0",
        "gray-800": "#3D3D3D",
        "lightest-gray": "#5D5D5D",
        "green-200": "#ABEFC6",
        "green-300": "#067647",
        "green-400": "#17B26A",
      },
    },
  },
  plugins: [],
};
