import { css } from '@emotion/react';
import reset from './reset';

const global = (theme) => css`
  ${reset}

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 400;
    letter-spacing: 1;
    color: ${theme.text};
    background-color: ${theme.background};
  }
`;

export default global;
