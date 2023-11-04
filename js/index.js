module.exports = {
    theme: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    }
  }

  module.exports = {
    theme: {
      extend: {
        colors :{
           'black-rgba':'rgba(0,0,0,0.3)'
        },
        screens: {
          'sm': '640px', // Define your custom breakpoint for small screens
        },
        width: {
          'nav-small': '50px', // Custom width for the navigation on small screens
        },
      },
    },
    variants: {},
    plugins: [],
  };