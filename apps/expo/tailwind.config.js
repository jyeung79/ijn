// @ts-check

const { theme } = require("@ijn/app/design/tailwind/theme");

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ["./App.tsx", "../../packages/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    ...theme,
  },
  plugins: [],
};
