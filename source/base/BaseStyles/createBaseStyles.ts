import { css } from '@emotion/react';
import vars, { VarNames } from '../../config/theme/vars';
import { FONT_SIZE, LINE_HEIGHT, SPACING } from '../../config/theme';

const createBaseStyles = css`
  :root {
    ${vars}
  }

  * {
    box-sizing: border-box;
  }

  html {
    line-height: ${LINE_HEIGHT.tight};
    -webkit-text-size-adjust: 100%;
  }

  body {
    color: var(${VarNames.TextPrimary});
    font-family: var(${VarNames.FontFamilyBase});
    font-size: ${FONT_SIZE['3']};
    line-height: ${LINE_HEIGHT.base};
    margin: ${SPACING[0]};
  }
`;

export default createBaseStyles;
