import { css } from '@emotion/react';

const focus = css`
  outline: 2px solid transparent;
  outline-offset: 2px;

  &:focus {
    outline-color: currentColor;
  }

  &:focus:not(:focus-visible) {
    outline-color: transparent;
  }
`;

export default focus;
