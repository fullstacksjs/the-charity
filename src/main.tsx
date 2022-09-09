import { ApolloProvider } from '@apollo/client';
import { createEmotionCache, MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import rtlPlugin from 'stylis-plugin-rtl';

import { client } from './apollo/client';
import { App } from './App';

const rtlCache = createEmotionCache({
  key: 'mantine-rtl',
  stylisPlugins: [rtlPlugin],
});

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MantineProvider
        withGlobalStyles
        withCSSVariables
        emotionCache={rtlCache}
        theme={{
          dir: 'rtl',
          fontFamily: 'Iranian Sans, sans-serif',
        }}
      >
        <App />
      </MantineProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
