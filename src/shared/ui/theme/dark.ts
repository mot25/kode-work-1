import { THEME_GRID_STEP } from './constants';

export const darkTheme = {
  name: 'dark',
  palette: {
    background: {
      primary: '#312C39',
       secondary: '#352F3D',
      bgListLeft: 'rgba(64, 58, 71, 0.5)',
      bgChips: 'rgba(64, 58, 71, 0.5)',
    },
    content: {
      primary: '#3B3542',
      secondary: '#403A47',
      tertiary: '#706D76',
    },
    accent: {
      primary: '#6C78E6',
      secondary: '#F678BA',
      tertiary: '#FFFFFF',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#C2C1C6',
      tertiary: '#706D76',
    },
    indicator: {
      error: '#FB6176',
      done: '#4CD563',
      success: '#6C78E6',
    },
    button: {
      primary: '#6C78E6',
      secondary: '#FFFFFF',
    },
    helpers: {
      transparent: 'transparent',
      bottomMenu: '#352F3D50',
      overlay: '#00000025',
      celndarPeriod: '#6C78E620',
      skeleton_color: '#403A47',
      line_skeleton: '#fff',
      bgSeperator: 'rgba(64, 58, 71, 0.5)',
      disabledButton: '#636166',
      tab_icon: '#C2C1C6',
      icon_bg_card: "#4A4451",
      bgLine: ''
    },
  },
  typography: {
    title: {
      size: '34px',
      lineHeight: '41px',
      letterSpacing: '0.41px',
      fontFamily: 'SF_PRO_BOLD_700',
    },
    largeTitle: {
      size: '28px',
      lineHeight: '34px',
      letterSpacing: '0.34px',
      fontFamily: 'SF_PRO_MEDIUM_500',
    },
    subtitle1: {
      size: '20px',
      lineHeight: '25px',
      letterSpacing: '0.38px',
      fontFamily: 'SF_PRO_SEMIBOLD_600',
    },
    subtitle2: {
      size: '17px',
      lineHeight: '22px',
      letterSpacing: '-0.41px',
      fontFamily: 'SF_PRO_SEMIBOLD_600',
    },
    body20: {
      size: '20px',
      lineHeight: '25px',
      letterSpacing: '0.38px',
      fontFamily: 'SF_PRO_REGULAR_400',
    },
    body17Medium: {
      size: '17px',
      lineHeight: '22px',
      letterSpacing: '-0.41px',
      fontFamily: 'SF_PRO_MEDIUM_500',
    },
    body17Regular: {
      size: '17px',
      lineHeight: '22px',
      letterSpacing: '-0.41px',
      fontFamily: 'SF_PRO_REGULAR_400',
    },
    body15Regular: {
      size: '15px',
      lineHeight: '20px',
      letterSpacing: '-0.24px',
      fontFamily: 'SF_PRO_REGULAR_400',
    },
    body15Semibold: {
      size: '15px',
      lineHeight: '20px',
      letterSpacing: '-0.24px',
      fontFamily: 'SF_PRO_SEMIBOLD_600',
    },
    caption1: {
      size: '13px',
      lineHeight: '15.51px',
      letterSpacing: '-0.08px',
      fontFamily: 'SF_PRO_REGULAR_400',
    },
    caption2: {
      size: '11px',
      lineHeight: '13.13px',
      letterSpacing: '0.07px',
      fontFamily: 'SF_PRO_REGULAR_400',
    },
    button: {
      size: '15px',
      lineHeight: '18px',
      letterSpacing: '-0.41px',
      fontFamily: 'SF_PRO_SEMIBOLD_600',
    },
    cardNumber: {
      size: '10px',
      lineHeight: '12px',
      fontFamily: 'SF_PRO_REGULAR_400',
      letterSpacing: '0px',

    }
  },
  spacing: (multiplier: number) => THEME_GRID_STEP * multiplier,
};

