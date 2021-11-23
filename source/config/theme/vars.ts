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
  UiAccent = '--ui-accent',
  UiAccentDark = '--ui-accent-dark',
  UiAccentLight = '--ui-accent-light',
  UiBorder = '--ui-border',
  UiBorderDark = '--ui-border-dark',
  UiBorderLight = '--ui-border-light',
}

const vars = css`
  ${VarNames.TextPrimary}: ${GRAYSCALE['gray-7']};
  ${VarNames.TextSecondary}: ${GRAYSCALE['gray-5']};
  ${VarNames.TextLink}: ${BRAND.blue.base};
  ${VarNames.TextLinkHover}: ${BRAND.blue.dark};
  ${VarNames.TextLinkActive}: ${BRAND.blue.dark};
  ${VarNames.TextLinkVisited}: ${BRAND.blue.dark};
  ${VarNames.FontFamilyBase}: ${FONT_FAMILY['lato']};
  ${VarNames.UiAccent}: ${BRAND.blue.base};
  ${VarNames.UiAccentDark}: ${BRAND.blue['dark-1']};
  ${VarNames.UiAccentLight}: ${BRAND.blue['light']};
  ${VarNames.UiBorder}: ${GRAYSCALE['gray-3']};
  ${VarNames.UiBorderDark}: ${GRAYSCALE['gray-6']};
  ${VarNames.UiBorderLight}: ${GRAYSCALE['gray-1']};
`;

export { VarNames };
export default vars;
