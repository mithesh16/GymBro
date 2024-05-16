const plugin = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { 
      backgroundImage: {
      'login-bg': "url('/Users/mithesh/GymBro-1/src/Assets/Images/bg.jpeg)",
    }},
  },
  plugins: [
    plugin(function({addVariant}){
        addVariant('children','&>*')
    })
  ],
}

