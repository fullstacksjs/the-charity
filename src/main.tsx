import { ApolloProvider } from '@apollo/client';
import { createEmotionCache, MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import rtlPlugin from 'stylis-plugin-rtl';

import { apolloClient } from './apollo/apolloClient';
import { App } from './App';
import { theme } from './theme';

const rtlCache = createEmotionCache({
  key: 'mantine-rtl',
  stylisPlugins: [rtlPlugin],
});

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <MantineProvider
        withGlobalStyles
        withCSSVariables
        emotionCache={rtlCache}
        theme={theme}
      >
        <App />
      </MantineProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
