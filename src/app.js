import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './utils/globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';

import Home from './pages/Home';
import Maintenance from './pages/Maintenance.js';

const App = () => {
  console.log('I see you (👁️ ͜ʖ👁️)');
  console.log('ᕙ(ಠ👄ಠ)ᕗ');
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <main>
          <Home />
          <Maintenance />
        </main>
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
