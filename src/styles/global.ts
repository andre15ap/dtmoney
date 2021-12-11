import { createGlobalStyle } from 'styled-components';

import { COLORS } from './colors';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: ${COLORS.BACKGROUND};
    --shape: ${COLORS.WHITE};

    --red: ${COLORS.RED};
    --blue: ${COLORS.BLUE};
    --blue-light: ${COLORS.BLUE_LIGHT};

    --text-title: ${COLORS.TITLE};
    --text-body: ${COLORS.TEXT};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    // font-size: 16px (desktop)
    @media (max-width: 1080px) {
      font-size: 93.75%; // 16*0.9375 = 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 16*0.875 = 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
