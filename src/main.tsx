import { ApolloProvider } from '@camp/data-layer';
import { ThemeProvider } from '@camp/design';
import { NotificationsProvider } from '@mantine/notifications';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { AuthCtxProvider } from './contexts/AuthCtx';
import { Routes } from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <ApolloProvider>
      <ThemeProvider>
        <NotificationsProvider limit={3}>
          <AuthCtxProvider>
            <Routes />
          </AuthCtxProvider>
        </NotificationsProvider>
      </ThemeProvider>
    </ApolloProvider>
  </StrictMode>,
);
