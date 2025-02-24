/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,tsx}", "./components/**/*.{js,ts,tsx}"],

  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        pregular: ["Poppins-Regular"],
        psemibold: ["Poppins-SemiBold"],
        pbold: ["Poppins-Bold"],
        plight: ["Poppins-Light"],
        pthin: ["Poppins-Thin"],
        pextralight: ["Poppins-ExtraLight"],
      },
    },
  },
  plugins: [],
};
