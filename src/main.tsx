import {
  createEmotionCache,
  MantineProvider,
} from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import rtlPlugin from 'stylis-plugin-rtl';

import { App } from './App';

const rtlCache = createEmotionCache({
  key: 'mantine-rtl',
  stylisPlugins: [rtlPlugin],
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
      <MantineProvider
        withGlobalStyles
        withCSSVariables
        emotionCache={rtlCache}
        theme={{
          dir: 'rtl',
          fontFamily: 'Iranian Sans, sans-serif'
        }}
      >
        <App />
      </MantineProvider>
  </React.StrictMode>,
);
