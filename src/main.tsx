import { ApolloProvider } from '@camp/data-layer';
import { ThemeProvider } from '@camp/design';
import { NotificationsProvider } from '@mantine/notifications';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { Routes } from './Routes';
import { createTestAttr } from './utils/createTestAttr';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <ApolloProvider>
      <ThemeProvider>
        <NotificationsProvider
          limit={3}
          {...createTestAttr('notification-provider')}
        >
          <Routes />
        </NotificationsProvider>
      </ThemeProvider>
    </ApolloProvider>
  </StrictMode>,
);
