module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        dark: '#002868',
      },
      red: {
        original: '#AB0427',
        dark: '#BF0A30',
      },
      black: {
        dark: '#333333',
      },
      white: {
        light: '#FFFFFF',
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1',
      },
      gray: {
        dark: '#B6B6B6',
      },
      yellow: '#ECC94B',
      orange: 'ED8936',
      green: '#48BB78',
      purple: '#9F7AEA',
      
    },
    boxShadow: {
      primary: '0px 0px 40px rgba(0, 0, 0, 0.25)',
      none: 'none',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '7': '7px',
      '8': '8px',
      '9': '9px',
      '10': '10px',
      '11': '11px',
      '12': '12px',
      '13': '13px',
      '14': '14px',
      '15': '15px',
    },

    spacing: {
      '-20': '-20px',
      '-6': '-6px',
      '0': '0px',
      '0.25': '025px',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '5.5': '5.5px',
      '6': '6px',
      '7': '7px',
      '8': '8px',
      '9': '9px',
      '10': '10px',
      '11': '11px',
      '12': '12px',
      '13': '13px',
      '14': '14px',
      '15': '15px',
      '16': '16px',
      '17': '17px',
      '18': '18px',
      '19': '19px',
      '20': '20px',
      '21': '21px',
      '22': '22px',
      '23': '23px',
      '24': '24px',
      '25': '25px',
      '26': '26px',
      '27': '27px',
      '28': '28px',
      '29': '29px',
      '30': '30px',
      '34': '34px',
      '35': '35px',
      '36': '36px',
      '40': '40px',
      '42': '42px',
      '43': '43px',
      '45': '45px',
      '46': '46px',
      '48': '48px',
      '50': '50px',
      '53': '53px',
      '55': '55px',
      '60': '60px',
      '70': '70px',
      '75': '75px',
      '80': '80px',
      '86': '86px',
      '92': '92px',
      '97': '97px',
      '100': '100px',
      '119': '119px',
      '130': '130px',
      '138': '138px',
      '141': '141px',
      '150': '150px',
      '162': '162px',
      '180': '180px',
      '184': '184px',
      '200': '200px',
      '218': '218px',
      '220': '220px',
      '228': '228px',
      '235': '235px',
      '240': '240px',
      '245': '245px',
      '250': '250px',
      '260': '260px',
      '261': '261px',
      '270': '270px',
      '280': '280px',
      '275': '275px',
      '285': '285px',
      '300': '300px',
      '320': '320px',
      '340': '340px',
      '345': '345px',
      '350': '350px',
      '360': '360px',
      '-380': '-380px',
      '365': '365px',
      '378': '378px',
      '400': '400px',
      '403': '403px',
      '410': '410px',
      '413': '413px',
      '420': '420px',
      '437': '437px',
      '440': '440px',
      '442': '442px',
      '446': '446px',
      '450': '450px',
      '457': '457px',
      '460': '460px',
      '465': '465px',
      '580': '580px',
      '600': '600px',
      '619': '619px',
      '630': '630px',
      '634': '634px',
      '640': '640px',
      '660': '660px',
      '740': '740px',
      '744': '744px',
      '750': '750px',
      '790': '790px',
      '810': '810px',
      '850': '850px',
      '920': '920px',
      '960': '960px',
      '984': '984px',
      '1024': '1024px',
      '1101': '1101px',
      '1240': '1240px',
      '1265': '1265px',
      '1280': '1280px',
      '1765': '1765px',
      '1660': '1660px',
      '1840': '1840px',
      '1900': '1900px',
      '2000': '2000px',
      'auto': 'auto',
      
    },

    extend: {
      fontFamily:{
        body:['SourceSansPro','serif'],
        ProximaNova:['ProximaNova'],
      },
      lineHeight: {
        '0' : '0px',
        '20': '20px',
        '25': '25px',
        '50': '50px',
       },
       fontSize: {
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '24': '24px',
        '26': '26px',
        '34': '34px',
        '46': '46px',
        '48': '48px',
       },
       letterSpacing: {
        '0' : '0px',
        '2' : '2px'
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
