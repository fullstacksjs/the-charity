import { AuthProvider } from '@camp/auth';
import { ApolloProvider } from '@camp/data-layer';
import { ThemeProvider } from '@camp/design';
import { ModalsProvider } from '@mantine/modals';
import { NotificationsProvider } from '@mantine/notifications';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { Routes } from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <AuthProvider>
      <ApolloProvider>
        <ThemeProvider>
          <NotificationsProvider limit={3}>
            <ModalsProvider>
              <Routes />
            </ModalsProvider>
          </NotificationsProvider>
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  </StrictMode>,
);
