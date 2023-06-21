import 'dayjs/locale/fa';
import '@camp/zod-addons';

import { ApolloProvider } from '@camp/api-client';
import { AuthProvider } from '@camp/auth';
import { config } from '@camp/config';
import { debug, DebugScopes } from '@camp/debug';
import { ThemeProvider } from '@camp/design';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { Routes } from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root')!);
debug.log(DebugScopes.All, config);

root.render(
  <StrictMode>
    <AuthProvider>
      <ApolloProvider>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  </StrictMode>,
);
