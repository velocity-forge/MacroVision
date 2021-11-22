import { css } from '@emotion/react';
import vars, { VarNames } from '../../config/theme/vars';
import {
  DURATION,
  EASING,
  FONT_SIZE,
  LINE_HEIGHT,
  SPACING,
} from '../../config/theme';
import focus from './focus';

const createBaseStyles = css`
  :root {
    ${vars}
  }

  * {
    box-sizing: border-box;
  }

  html {
    line-height: ${LINE_HEIGHT.tight};
    text-size-adjust: 100%;
    @media screen and (prefers-reduced-motion: no-preference) {
      scroll-behavior: smooth;
    }
  }

  body {
    color: var(${VarNames.TextPrimary});
    font-family: var(${VarNames.FontFamilyBase});
    font-size: ${FONT_SIZE['3']};
    line-height: ${LINE_HEIGHT.base};
    margin: ${SPACING[0]};
  }

  a {
    ${focus};
    background-color: transparent;
    color: var(${VarNames.TextLink});
    -webkit-text-decoration-skip: objects;
    transition-duration: ${DURATION.short};
    transition-property: background-color, border-color, color, outline-color;
    transition-timing-function: ${EASING['ease-in']};

    &:visited {
      color: var(${VarNames.TextLinkVisited});
    }

    &:hover,
    &:focus {
      color: var(${VarNames.TextLinkHover});
    }

    &:active {
      color: var(${VarNames.TextLinkActive});
    }
  }
`;

export default createBaseStyles;
