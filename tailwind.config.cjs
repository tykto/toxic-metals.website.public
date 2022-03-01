const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        /* https://tailwinwindshades.com used to generate shades */
        napa: {
          DEFAULT: '#ADA190',
          50: '#FBFAFA',
          100: '#F2F0EE',
          200: '#E1DDD6',
          300: '#D0C9BF',
          400: '#BEB5A7',
          500: '#ADA190',
          600: '#958670',
          700: '#766957',
          800: '#564C3F',
          900: '#352F27',
        },
        boston: {
          DEFAULT: '#4298B5',
          50: '#C5E0EA',
          100: '#B6D9E4',
          200: '#98C9D9',
          300: '#7AB9CF',
          400: '#5CAAC4',
          500: '#4298B5',
          600: '#33758C',
          700: '#245363',
          800: '#15303A',
          900: '#060E11',
        },
        heather: {
          DEFAULT: '#B7C9D3',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#EAEFF2',
          400: '#D0DCE2',
          500: '#B7C9D3',
          600: '#94AFBE',
          700: '#7195A8',
          800: '#56798C',
          900: '#405B69',
        },
        port: {
          DEFAULT: '#742C50',
          50: '#D186AC',
          100: '#CC78A2',
          200: '#C05A8D',
          300: '#AF4279',
          400: '#923764',
          500: '#742C50',
          600: '#4B1D34',
          700: '#230D18',
          800: '#000000',
          900: '#000000',
        },
      },
      height: {
        100: '26rem',
        120: '30rem',
        144: '36rem',
      },
      fontFamily: {
        cg1: ['Century Gothic V1', 'Century Gothic', 'sans-serif'],
      },
      fontSize: {
        0: 0,
      },
      backgroundImage: {
        logo: "url('/images/logo-1.png')",
        logosmall: "url('/images/logo-1-small.png')",
        title: "url('/images/header.jpg')",
        wall: "url('./images/black-brick-wall-2.jpg')",
        watermark: "url('/images/watermark.png')",
      },
      borderWidth: {
        10: '10px',
      },
    },
  },

  plugins: [],
};

module.exports = config;
