import React from 'react';
import ReactDOM from 'react-dom';
import {
  ThemeProvider,
  CSSReset,
  Box,
  ColorModeProvider,
} from '@chakra-ui/core';

import App from './App';

ReactDOM.render(
  <ThemeProvider>
    <ColorModeProvider>
      <CSSReset />
      <Box pt={16} pb={4}>
        <App />
      </Box>
    </ColorModeProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
