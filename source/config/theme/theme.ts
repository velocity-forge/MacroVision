import { rem } from 'polished';

const BRAND = {
  blue: {
    base: '#0071BC',
    light: '#4773aa',
    'light-1': '#8ba6ca',
    'light-2': '#dce4ef',
    dark: '#205493',
    'dark-1': '#112E51',
  },
  'ocean-blue': {
    base: '#1dc2ae',
    light: '#29e1cb',
    'light-1': '#7efbe1',
    dark: '#008480',
    'dark-1': '#0b4b3f',
  },
};

const GRAYSCALE = {
  white: '#ffffff',
  'gray-1': '#f1f1f1',
  'gray-2': '#e6e6e6',
  'gray-3': '#adadad',
  'gray-4': '#757575',
  'gray-5': '#5c5c5c',
  'gray-6': '#454545',
  'gray-7': '#1b1b1b',
  black: '#000000',
};

const OTHER_COLORS = {
  yellow: {
    base: '#fad980',
    light: '#fff1d2',
  },
  'yellow-neon': {
    base: '#ff0',
  },
  green: {
    base: '#94bfa2',
    light: '#e7f4e4',
  },
  red: {
    base: '#e31c3d',
    light: '#e59393',
    'light-1': '#f9dede',
    dark: '#cd2026',
    'dark-1': '#981b1e',
  },
};

const PALETTE = {
  ...BRAND,
  ...GRAYSCALE,
  ...OTHER_COLORS,
};

const LINE_HEIGHT = {
  tight: 1.15,
  base: 1.4,
  loose: 1.625,
};

const FONT_FAMILY = {
  lato: 'Lato, Arial, sans-serif',
};

const FONT_SIZE = {
  1: `${rem(12)}`,
  1.5: `${rem(14)}`,
  2: `${rem(16)}`,
  2.5: `${rem(18)}`,
  3: `${rem(20)}`,
  4: `${rem(24)}`,
  4.5: `${rem(32)}`,
  5: `${rem(36)}`,
  6: `${rem(40)}`,
  7: `${rem(48)}`,
  8: `${rem(56)}`,
  9: `${rem(64)}`,
  10: `${rem(80)}`,
};

const FONT_WEIGHT = {
  light: 300,
  regular: 400,
  semibold: 600,
  bold: 700,
};

const SPACING = {
  0: `${rem(0)}`,
  0.5: `${rem(4)}`,
  1: `${rem(8)}`,
  1.5: `${rem(12)}`,
  2: `${rem(16)}`,
  2.5: `${rem(20)}`,
  3: `${rem(24)}`,
  4: `${rem(32)}`,
  5: `${rem(40)}`,
  6: `${rem(48)}`,
  7: `${rem(56)}`,
  8: `${rem(64)}`,
  9: `${rem(72)}`,
  10: `${rem(80)}`,
  12: `${rem(96)}`,
  15: `${rem(120)}`,
};

const BREAKPOINT = {
  mobile: '320px',
  mobileLg: '480px',
  tablet: '640px',
  tabletLg: '880px',
  desktop: '1024px',
  desktopLg: 'bpDesktopLg',
  widescreen: '1440px',
};

const CONSTRAIN = {
  sm: `${rem(800)}`,
  md: `${rem(1440)}`,
  lg: `${rem(2200)}`,
};

export {
  BRAND,
  GRAYSCALE,
  OTHER_COLORS,
  PALETTE,
  LINE_HEIGHT,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  SPACING,
  BREAKPOINT,
  CONSTRAIN,
};
