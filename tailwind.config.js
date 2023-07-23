/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      'xl':{'max':'1200px'},
      'lg':{'max':'1024px'},
      'md':{'max':'768px'},
      'sm':{'max':'480px'},
    },
    container:{
      padding:'20px',
      center:true
    },
    extend: {
      colors:{
        darkgrey:'#212B31',
        grey:'#72787D',
        blue:'#036FC7'
      }
    },
  },
  plugins: [],
}

