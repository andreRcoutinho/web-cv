import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';

import JakartaWoff from '../assets/fonts/PlusJakartaSans-Regular.woff';
import JakartaWoff2 from '../assets/fonts/PlusJakartaSans-Regular.woff2';
import PlusJakartaDisplayWoff from '../assets/fonts/PlusJakartaDisplay-Regular.woff';
import PlusJakartaDisplayWoff2 from '../assets/fonts/PlusJakartaDisplay-Regular.woff2';

const globalStyle = createGlobalStyle`
${normalize}

@font-face {
  font-family: 'Plus Jakarta Display Regular';
  font-style: normal;
  font-weight: normal;
  src:
    url('${PlusJakartaDisplayWoff2}') format('woff2'),
    url('${PlusJakartaDisplayWoff}') format('woff');
  }
}

@font-face {
  font-family: 'Plus Jakarta Text Regular';
  font-style: normal;
  font-weight: normal;
  src:
    url('${JakartaWoff2}') format('woff2'),
    url('${JakartaWoff}') format('woff');
  }
}

html {
  scroll-snap-type: y mandatory;
}

body {
  font-family: Plus Jakarta Text Regular, sans-serif;

  max-width: 100vw;
  margin: 0 auto;

  background: ${(props) => props.theme.backgroundGradient};
}

section {
  scroll-snap-align: start;
}

h1 {
  font-family: Plus Jakarta Display Regular, sans-serif;
  font-variant-ligatures: historical-ligatures;
  font-feature-settings: "ss02";
  color: ${(props) => props.theme.white};
  font-size: 3.25rem;
  line-height: 3.5rem;
}
`;

export default globalStyle;
