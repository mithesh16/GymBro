const plugin = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { 
      backgroundImage: {
      'login-bg': "url('/Users/mithesh/GymBro-1/src/Assets/Images/bg.jpeg)",
      'mobile-hero':"url('https://images.pexels.com/photos/5956909/pexels-photo-5956909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      'desktop-hero':"url('https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg?auto=compress&cs=tinysrgb&w=800')"
    }},
  },
  plugins: [
    plugin(function({addVariant}){
        addVariant('children','&>*')
    })
  ],
}

