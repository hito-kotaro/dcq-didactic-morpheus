module.exports = {
  content: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      minHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
        500: '500px',
      },
      minWidth: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
        400: '400px',
      },
      colors: {
        success: '#5CD63D',
        alert: '#F47171',
        primary: '#FBA305',
        secondary: '#FBB066',
        base: '#FFF4EB',
        text: '#6F7073',
        // for badge
        open: '#5CD63D',
        cancel: '#FFE602',
        reject: '#F47171',
      },
    },
  },
  plugins: [],
};
