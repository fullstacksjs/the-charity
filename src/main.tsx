import { ApolloProvider } from '@camp/data-layer';
import { ThemeProvider } from '@camp/design';
import { NotificationsProvider } from '@mantine/notifications';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { AuthCtxProvider } from './contexts/AuthCtx';
import { Routes } from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root')!);

// if you click on "A" (shift+a) you get authenticated
// if you click on "N" (shift+n) you get unauthenticated
const fakeAuth = () => {
  document.addEventListener('keydown', event => {
    if (event.key === 'A') {
      const date = new Date();
      date.setTime(date.getTime() + 100 * 60 * 60 * 1000);
      document.cookie = `auth=true; expires=${date.toUTCString()}`;
    } else if (event.key === 'N') document.cookie = 'auth=false;';
  });
};

fakeAuth();

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
