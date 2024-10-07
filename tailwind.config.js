/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './assets/*.js'
  ],

  theme: {
    extend: {
      letterSpacing: {
        global: '0.64px',
      },
      fontFamily: {
        heading: ['"Redwing", sans-serif'],
        body: ['"Outfit", sans-serif'],
      },
      colors: {
        white: '#ffffff',
        black: '#000000',
        purple: '#C12CFF',
        dark_purple:'#610781',
        dark_blue: '#004B80',
        grey: '#455A64',
        green: '#15A02B',
      },
      flex: {
        auto: '1 1 auto',
        initial: '0 1 auto',
        inherit: 'inherit',
        none: 'none',
        '2': '0 0 36%',
      },
      boxShadow: {
        'shadow-grey': '0px 12px 28px 0px rgba(0, 0, 0, 0.28);',
      },
      transitionProperty: {
        common: 'all 300ms',
        all: 'all',
        common_trans:'all linear 300ms cubic-bezier(0.4, 0, 0.2, 1)',
       
    },
      container: {
        center: true,
        padding: '30px',
      },
      zIndex: {
        '-1': '-1',
        0: 0,
        1: 1,
        9: 9,
        11: 11,
        12: 12,
        98: 98,
        99: 99,
        100: 100,
        800: 800,
        900: 900,
        999: 999,
        9999: 9999,
      },
      padding: {
        0: '0px',
        1: '1px',
        2: '2px',
        4: '4px',
        5: '5px',
        6: '6px',
        7: '7px',
        8: '8px',
        9: '9px',
        10: '10px',
        11: '11px',
        12: '12px',
        13: '13px',
        14: '14px',
        15: '15px',
        17: '17px',
        18: '18px',
        20: '20px',
        22: '22px',
        25: '25px',
        28: '28px',
        30: '30px',
        35: '35px',
        40: '40px',
        50: '50px',
        55: '55px',
        60: '60px',
        70: '70px',
        75: '75px',
        80: '80px',
        100: '100px',
        200: '200px',
        300: '300px',
      },
      margin: {
        auto: 'auto',
        0: '0px',
        2: '2px',
        3: '3px',
        4: '4px',
        5: '5px',
        6: '6px',
        8: '8px',
        9: '9px',
        10: '10px',
        14: '14px',
        20: '20px',
        25: '25px',
        28: '28px',
        30: '30px',
        35: '35px',
        40: '40px',
        44: '44px',
        55: '55px',
        70: '70px',
        80: '80px',
        100: '100px',
      },
      fontSize: {
        8: '8px',
        9: '9px',
        10: '10px',
        11: '11px',
        12: '12px',
        13: '13px',
        14: '14px',
        15: '15px',
        16: '16px',
        17: '17px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        26: '26px',
        28: '28px',
        30: '30px',
        32: '32px',
        36: '36px',
        38: '38px',
        42: '42px',
        40: '40px',
        44: '44px',
        48: '48px',
        50: '50px',
        54: '54px',
        64: '64px',
      },
      lineHeight: {
        0: '0px',
        9: '9px',
        14: '14px',
        20: '20px',
        22: '22px',
        24: '24px',
        25: '25px',
        26: '26px',
        28: '28px',
        30: '30px',
        31: '31px',
        32: '32px',
        36: '36px',
        38: '38px',
        42: '42px',
        46: '46px',
        57: '57px',
        63: '63px',
        76: '76px',
      },
      gap: {
        5: '5px',
        10: '10px',
        14: '14px',
        15: '15px',
        16: '16px',
        20: '20px',
        25: '25px',
        28: '28px',
        30: '30px',
        35: '35px',
        40: '40px',
        44: '44px',
        50: '50px',
        55: '55px',
        100: '100px',
      },
      fontWeight: {
        100: '100',
        200: '200',
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
        900: '900',
    },
      width: {
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        8: '8px',
        9: '9px',
        10: '10px',
        12: '12px',
        15: '15px',
        20: '20px',
        40: '40px',
      },
      height: {
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        7: '7px',
        8: '8px',
        10: '10px',
        12: '12px',
        15: '15px',
        20: '20px',
        40: '40px',
        200: '200px',
        250: '250px',
        350: '350px',
        400: '400px',
        450: '450px',
        500: '500px',
        550: '550px',
      },
      minWidth: {
        16: '16px',
      },
      maxWidth: {
        130: '130px',
        800: '800px',
      },
      minHeight: {
        auto: 'auto',
        550: '550px',
      },
      maxHeight: {
        auto: 'auto',
        550: '550px',
      },
      inset: {
        0: '0px',
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        5: '5px',
        6: '6px',
        7: '7px',
        8: '8px',
        9: '9px',
        10: '10px',
        20: '20px',
        40: '40px',
        60: '60px',
        70: '70px',
        100: '100px',
        '50_per': '50%',
      },
      borderWidth: {
        DEFAULT: '1px',
        0.5: '0.5px',
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        5: '5px',
        0: '0px',
      },
      borderRadius: {
        DEFAULT: '1px',
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        10: '10px',
        20: '20px',
        0: '0px',
      },
      outline: {
        none: 'none',
      },
      textIndent: {
        '-9999': '-9999px',
      },
      spacing: {
        '2px': '2px',
        '50_per': '50%',
        '101_per': '101%',
      },
      backgroundImage: (theme) => ({
        none: "none",
        'purple_gradient': ' linear-gradient(90deg, #C12CFF 0%, #610781 100%);',
        'banner_gradient': ' linear-gradient(270deg, #000 0%, rgba(0, 0, 0, 0.83) 13.02%, rgba(0, 0, 0, 0.76) 26.82%, rgba(0, 0, 0, 0.60) 39.32%, rgba(0, 0, 0, 0.00) 50%)',
        'banner_gradient_lg': ' linear-gradient(0deg, #000 52.65%, rgba(0, 0, 0, 0.70) 61.13%, rgba(0, 0, 0, 0.52) 66.32%, rgba(0, 0, 0, 0.33) 70.33%, rgba(0, 0, 0, 0.22) 73.51%, rgba(0, 0, 0, 0.00) 77.38%)',
        'page_banner_gradient_sm': 'linear-gradient(270deg,#000,#000000d4 13.02%,#000000c2 26.82%,#0009 55.32%,#0000 78%)',
        'black_gradient': 'linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%)',
        'banner_new_gradient':'linear-gradient(90deg,#000,#000000d4 13.02%,#000000c2 26.82%,#0009 39.32%,#0000 50%)',
        // 'banner_mobile_gradient':'linear-gradient(0deg,#000,#000000b3 50%,#00000085 52%,#00000054 55%,#00000038 56%,#0000)',
        'banner_mobile_gradient':'linear-gradient(0deg, #000, #000000b3 0%, #00000085 40%, #00000054 47%, #00000038 48%, #0000, 55%, #0000)',
      }),
      backgroundOpacity: {
        '10': '0.1',
        '20': '0.2',
        '70': '0.7',
        '95': '0.95',
      },
      backgroundSize: {
        10: "10px",
      },
      backgroundPosition: {
        'right-center3': '100% 51%',
        'right-center': '95% 51%',
      },
      screens: {
        xsscreen: { 'max': '320px' },
        xxsscreen1: { 'max': '374px' },
        xsscreen1: { 'min': '375px' },
        xsscreen2: { 'max': '400px' },
        xsscreen3: { 'min': '401px' },
        smscreen: { 'max': '575px' },
        smscreen1: { 'min': '576px' },
        smscreen2: { 'max': '639px' },
        mdscreen5: { 'max': '749px' },
        mdscreen4: { 'min': '750px' },
        mdscreen: { 'max': '767px' },
        mdscreen1: { 'max': '989px' },
        mdscreen3: { 'max': '991px' },
        mdscreen2: { 'min': '990px' },
        lgscreen: { 'max': '1023px' },
        lgscreen2: { 'max': '1099px' },
        xlscreen: { 'max': '1199px' },
        xlscreen1: { 'min': '1200px' },
        xlscreen2: { 'max': '1279px' },
        xlscreen3: { 'max': '1366px' },
        xlscreen4: { 'max': '1440px' },
        xlscreen5: { 'max': '1510px' },
        xlscreen6: { 'max': '1600px' },
        xl: { 'min': '1280px' },
        small_desktop1: { 'max': '1365px' },
        small_desktop: { 'min': '1366px' },
        desktop: { 'min': '1440px' },
        large_desktop: { 'min': '1512px' },
        midlarge_desktop: { 'min': '1600px' },
        extlarge_desktop: { 'min': '1921px' },
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '940px',
          },
          '@screen xl': {
            maxWidth: '1240px',
          },
          '@screen 2xl': {
            maxWidth: '1536px',
          },
        }
      })
    }
  ],
}