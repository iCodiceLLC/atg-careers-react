module.exports = {
  content: ['./src/components/**/*.{html,js,jsx}', './src/pages/*.{html,js,jsx}', './src/*.{hmtl,js,jsx}'],
  theme: {
    extend: {
      fontSize: {
        8: '8px',
        12: '12px',
        14: '14px',
        16: '16px',
        20: '20px',
        22: '22px',
        24: '24px',
        32: '32px',
      },
      screens: {
        sm: { min: '640px', max: '767px' },
        md: { min: '768px', max: '1023px' },
        lg: { min: '1024px', max: '1279px' },
        xl: { min: '1280px' },
      },
      colors: {
        green: '#8CAD2B',
        secondary: '#008CC0',
      },
      spacing: {
        1: '8px',
        2: '12px',
        3: '16px',
        4: '24px',
        5: '32px',
        6: '48px',
      },
    },
  },
  plugins: [],
}
