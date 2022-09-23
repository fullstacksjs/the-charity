import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '@camp/data-layer';
import { ThemeProvider } from '@camp/design';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </StrictMode>,
);
