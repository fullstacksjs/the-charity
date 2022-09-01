import React from 'react';
import { MantineProvider, createEmotionCache } from '@mantine/core';
import rtlPlugin from 'stylis-plugin-rtl';
import ReactDOM from 'react-dom/client';

import { App } from './App';

const rtlCache = createEmotionCache({
  key: 'mantine-rtl',
  stylisPlugins: [rtlPlugin],
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withCSSVariables
      emotionCache={rtlCache}
      theme={{ dir: 'rtl' }}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
