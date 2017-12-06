import {scale, scaleVertical} from '../utils/scale'

const Colors = {
  accent: '#63C731',

  primary: '#f64e59',
  success: '#3bd555',
  disabled: '#cacaca',

  foreground: '#5A655C',
  alterForeground: '#e1e1e1',
  inverseForeground: '#63C731',
  secondaryForeground: '#e2e2e2',
  hintForeground: '#969696',

  background: '#1A1A1A',
  alterBackground: '#1B1B1B',
  overlayBackground: '#fff',
  neutralBackground: '#63C731',
  fadedBackground:'#fff',

  border: '#bbb',

  twitter: '#41abe1',
  google: '#e94335',
  facebook: '#3b5998',

  gradientBaseBegin: '#ff9147',
  gradientBaseEnd: '#ff524c',
  gradientVisaBegin:'#63e2ff',
  gradientVisaEnd:'#712ec3',
  gradientMasterBegin:'#febb5b',
  gradientMasterEnd:'#f24645',
  gradientAxpBegin:'#42e695',
  gradientAxpEnd:'#3bb2bb',

  // -----
  faded: '#000000',
  icon: '#c2c2c2',
  neutral: '#1B1B1B',

    headerBackground: '#63C731',


  info: '#19bfe5',
  warning: '#feb401',
  danger: '#ed1c4d',

  starsStat: '#2ab5fa',
  tweetsStat: '#ffc61c',
  likesStat: '#5468ff',

  doughnutFirst: '#8a98ff',
  doughnutSecond: '#ffd146',
  doughnutThird: '#c2d521',
  doughnutFourth: '#ff6b5c',

  followersProgress: '#c2d521',

  followersFirst: '#b3e5fc',
  followersSecond: '#81d4fa',
  followersThird: '#4fc3f7',
  followersFourth: '#42a5f5',

  chartsAreaStroke:'#097fe5',
  chartsAreaFill: '#d6ecff'

};

const FontBaseValue = scale(18);


const Fonts = {
    light: 'Lato-Light',
    regular: 'Lato-Regular',
    bold: 'Lato-Bold',
    logo: 'Lato-Regular',
};

export const KittenTheme = {
  name: 'light',
  colors: {
    accent: Colors.accent,
    primary: Colors.primary,
    disabled: Colors.disabled,
    twitter: Colors.twitter,
    google: Colors.google,
    facebook: Colors.facebook,
    brand: Colors.accent,
      header: {
        background: Colors.headerBackground,
        color: Colors.foreground
      },
    text: {
      base: Colors.foreground,
      secondary: Colors.secondaryForeground,
      accent: Colors.accent,
      inverse: Colors.inverseForeground,
      hint: Colors.alterForeground,
    },
    input: {
      text: Colors.alterForeground,
      background: '#fff',
      label: Colors.secondaryForeground,
      placeholder: Colors.secondaryForeground,
    },
    screen: {
      base: Colors.background,
      alter: Colors.alterBackground,
      scroll: Colors.alterBackground,
      bold: Colors.alterBackground,
      overlay: Colors.overlayBackground
    },
    button: {
      back: Colors.background,
      underlay: Colors.neutralBackground,
      highlight: Colors.primary
    },
    border: {
      base: Colors.border,
      accent: Colors.accent,
      secondary: Colors.secondaryForeground
    },
    control: {
      background: Colors.background
    },
    badge:{
      likeBackground: Colors.primary,
      likeForeground: Colors.inverseForeground,
      plusBackground: Colors.success,
      plusForeground: Colors.inverseForeground,
    },
    chat:{
      messageInBackground: Colors.neutralBackground,
      messageOutBackground: Colors.fadedBackground,
      text: Colors.foreground
    },
    gradients: {
      base: [Colors.gradientBaseBegin, Colors.gradientBaseEnd],
      visa: [Colors.gradientVisaBegin, Colors.gradientVisaEnd],
      mastercard: [Colors.gradientMasterBegin, Colors.gradientMasterEnd],
      axp: [Colors.gradientAxpBegin, Colors.gradientAxpEnd],
    },
    dashboard: {
      stars: Colors.starsStat,
      tweets: Colors.tweetsStat,
      likes: Colors.likesStat,
    },
    charts:{
      followersProgress: Colors.followersProgress,
      doughnut: [Colors.doughnutFirst, Colors.doughnutSecond, Colors.doughnutThird, Colors.doughnutFourth],
      followersArea: [Colors.followersFirst, Colors.followersSecond, Colors.followersThird, Colors.followersFourth],
      area: {
        stroke: Colors.chartsAreaStroke,
        fill: Colors.chartsAreaFill
      }
    }
  },
  fonts: {
    sizes: {
      h0: scale(32),
      h1: scale(26),
      h2: scale(24),
      h3: scale(20),
      h4: scale(18),
      h5: scale(16),
      h6: scale(15),
      p1: scale(16),
      p2: scale(15),
      p3: scale(15),
      p4: scale(13),
      s1: scale(15),
      s2: scale(13),
      s3: scale(13),
      s4: scale(12),
      s5: scale(12),
      s6: scale(13),
      s7: scale(10),
      base: FontBaseValue,
      small: FontBaseValue * .8,
      medium: FontBaseValue,
      large: FontBaseValue * 1.2,
      xlarge: FontBaseValue / 0.75,
      xxlarge: FontBaseValue * 1.6,
    },
    family: {
      regular: Fonts.regular,
      light: Fonts.light,
      bold: Fonts.bold,
      logo: Fonts.logo
    }
  }
};
