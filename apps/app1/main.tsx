import { Auth0Provider } from '@auth0/auth0-react';
import { ApolloProvider } from '@camp/data-layer';
import { ThemeProvider } from '@camp/design';
import { ModalsProvider } from '@mantine/modals';
import { NotificationsProvider } from '@mantine/notifications';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { AuthProvider, FullPageLoader } from './components';
import { config } from './config';
import { Routes } from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <Auth0Provider
      domain={config.auth0.domain}
      clientId={config.auth0.clientId}
      redirectUri={window.location.origin}
      audience={config.schemaUrl}
      scope="read:current_user"
    >
      <div onPointerDown={e => e.target} />
      <ApolloProvider>
        <ThemeProvider>
          <NotificationsProvider limit={3}>
            <ModalsProvider>
              <AuthProvider fallback={<FullPageLoader />}>
                <Routes />
              </AuthProvider>
            </ModalsProvider>
          </NotificationsProvider>
        </ThemeProvider>
      </ApolloProvider>
    </Auth0Provider>
  </StrictMode>,
);
