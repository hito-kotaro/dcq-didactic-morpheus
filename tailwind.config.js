module.exports = {
  content: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      zIndex: {
        1300: '1300',
      },
      borderWidth: {
        1: '1px',
      },
      minHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
        500: '500px',
        600: '600px',
      },
      minWidth: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
        400: '400px',
        100: '200px',
      },
      maxHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
        500: '500px',
        600: '600px',
      },
      maxWidth: {
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
        // for header
        h_text: '#C9CACE',
        h_base: '#1E212A',
        // for badge
        open: '#10B982',
        closed: '#444444',
        approved: '#3B82F6',
        canceled: '#F59E0C',
        rejected: '#F04444',
        other: '#8B5CF7',
      },
    },
  },
  plugins: [],
};
