import { ApolloProvider } from '@camp/data-layer';
import { ThemeProvider } from '@camp/design';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { Routes } from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <ApolloProvider>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </ApolloProvider>
  </StrictMode>,
);
