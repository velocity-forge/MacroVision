import { css } from '@emotion/react';
import { BRAND, FONT_FAMILY, GRAYSCALE } from './theme';

enum VarNames {
  TextPrimary = '--color-text-primary',
  TextSecondary = '--color-text-secondary',
  TextLink = '--color-text-link',
  TextLinkHover = '--color-text-link-hover',
  TextLinkActive = '--color-text-link-active',
  TextLinkVisited = '--color-text-link-visited',
  FontFamilyBase = '--font-family-base',
}

const vars = css`
  ${VarNames.TextPrimary}: ${GRAYSCALE['gray-7']};
  ${VarNames.TextSecondary}: ${GRAYSCALE['gray-5']};
  ${VarNames.TextLink}: ${BRAND.blue.base};
  ${VarNames.TextLinkHover}: ${BRAND.blue.dark};
  ${VarNames.TextLinkActive}: ${BRAND.blue.dark};
  ${VarNames.TextLinkVisited}: ${BRAND.blue.dark};
  ${VarNames.FontFamilyBase}: ${FONT_FAMILY['lato']};
`;

export { VarNames };
export default vars;
