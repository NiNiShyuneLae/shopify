/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppin:'Poppins'
      },
      container:{
        center:true,
        padding:"2rem"
      },
      colors:{
        primary:'#fffffe',
        secondary:'#d9d4e7',
        header:'#272343',
        info:'#3d5a80',
        warning:'#ffd803',
        badge:'#4361ee'
      }
    },
  },
  plugins: [],
}
