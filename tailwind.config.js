module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        oceanMonument: {
          primary: "#93c5fd",

          secondary: "#a5f3fc",

          accent: "#1d4ed8",

          neutral: "#0891b2",

          "base-100": "#0c4a6e",

          info: "#818cf8",

          success: "#a7f3d0",

          warning: "#fef08a",

          error: "#fecaca",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
