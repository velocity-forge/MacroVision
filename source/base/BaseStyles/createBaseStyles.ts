import { css, SerializedStyles, Theme } from "@emotion/react";

function createBaseStyles(theme: Theme): SerializedStyles {
  return css`
    * {
      box-sizing: border-box;
    }

    html {
      line-height: ${theme.typography.lineHeight.tight};
      -webkit-text-size-adjust: 100%;
    }

    body {
      color: ${theme.palette.grayscale.gray8};
      font-family: ${theme.typography.fontFamily.base};
      font-size: ${theme.typography.fontSize["3"]};
      line-height: ${theme.typography.lineHeight.base};
      margin: 0;
    }
  `;
}

export default createBaseStyles;
