export const theme = {
  colors: {
    backgroundColor: '#040a0a',
    textColor: '#ffffff',
    mainColor: '#43ffd2',
    accentColor: '#d978ac',
    buttonHover: '#7d2253',
    inputTextColor: '#395959',
  },
  mixins: {
    flexCenter: `
  display: flex;
  align-items: center;
  justify-content: center;
  `,

    flex: `
    display:flex;
    align-items: center;
    `,
  },

  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
};
