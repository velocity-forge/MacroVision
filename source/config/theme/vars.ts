import { css } from '@emotion/react';
import { FONT_FAMILY, GRAYSCALE } from './theme';

enum VarNames {
  TextPrimary = '--color-text-primary',
  TextSecondary = '--color-text-secondary',
  FontFamilyBase = '--font-family-base',
}

const vars = css`
  ${VarNames.TextPrimary}: ${GRAYSCALE['gray-7']};
  ${VarNames.TextSecondary}: ${GRAYSCALE['gray-5']};
  ${VarNames.FontFamilyBase}: ${FONT_FAMILY['lato']};
`;

export { VarNames };
export default vars;
