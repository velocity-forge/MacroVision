import { rem } from 'polished';

const constrainXSmall = '656px';
const constrainSmall = '760px';
const constrainMd = '1160px';
const constrainLg = '1440px';

const bpMobile = '320px';
const bpMobileLg = '480px';
const bpTablet = '640px';
const bpTabletLg = '780px';
const bpDesktop = '1024px';
const bpDesktopLg = '1200px';
const bpWidescreen = '1400px';

// Gray Scale
const colorWhite = '#fff';
const colorGray1 = '#f5f5f5';
const colorGray2 = '#ececec';
const colorGray3 = '#e3e3e3';
const colorGray4 = '#dcdbdb';
const colorGray5 = '#d2d2d2';
const colorGray6 = '#9d9d9d';
const colorGray7 = '#696969';
const colorGray8 = '#353535';
const colorBlack = '#000';

// Colors
const colorCyanBase = '#1696d2';
const colorCyanLight = '#46abdb';
const colorCyanLight1 = '#73bfe2';
const colorCyanLight2 = '#a2d4ec';
const colorCyanLight3 = '#cfe8f3';
const colorCyanDark = '#12719e';
const colorCyanDark1 = '#0a4c6a';
const colorCyanDark2 = '#062635';

const colorMagentaBase = '#ec00b8';
const colorMagentaLight = '#f5cbdf';
const colorMagentaDark = '#351123';

const colorRedBase = '#db2b27';

const spacingScale = {
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

const fontFamilyBase = 'Lato, Arial, sans-serif';

const fontWeightLight = 300;
const fontWeightRegular = 400;
const fontWeightBold = 700;

const fontSizeScale = {
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

const lineHeightScale = {
  tight: 1.15,
  base: 1.4,
  loose: 1.625,
};

/**
 * The theme object.
 */
const theme = {
  breakpoint: {
    mobile: bpMobile,
    mobileLg: bpMobileLg,
    tablet: bpTablet,
    tabletLg: bpTabletLg,
    desktop: bpDesktop,
    desktopLg: bpDesktopLg,
    widescreen: bpWidescreen,
  },
  constraint: {
    xSmall: constrainXSmall,
    small: constrainSmall,
    medium: constrainMd,
    large: constrainLg,
  },
  palette: {
    cyan: {
      light3: colorCyanLight3,
      light2: colorCyanLight2,
      light1: colorCyanLight1,
      light: colorCyanLight,
      base: colorCyanBase,
      dark: colorCyanDark,
      dark1: colorCyanDark1,
      dark2: colorCyanDark2,
    },
    grayscale: {
      white: colorWhite,
      gray1: colorGray1,
      gray2: colorGray2,
      gray3: colorGray3,
      gray4: colorGray4,
      gray5: colorGray5,
      gray6: colorGray6,
      gray7: colorGray7,
      gray8: colorGray8,
      black: colorBlack,
    },
    magenta: {
      light: colorMagentaLight,
      base: colorMagentaBase,
      dark: colorMagentaDark,
    },
    red: {
      base: colorRedBase,
    },
  },
  spacing: spacingScale,
  typography: {
    fontFamily: {
      base: fontFamilyBase,
    },
    fontSize: fontSizeScale,
    fontWeight: {
      bold: fontWeightBold,
      light: fontWeightLight,
      regular: fontWeightRegular,
    },
    lineHeight: lineHeightScale,
  },
};

export type BaseTheme = typeof theme;
export default theme;
