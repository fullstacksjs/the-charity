import 'dayjs/locale/fa';
import '../libs/monkeyPatchZod';

import { AuthProvider } from '@camp/auth';
import { config } from '@camp/config';
import { ApolloProvider } from '@camp/data-layer';
import { debug, DebugScopes } from '@camp/debug';
import { ThemeProvider } from '@camp/design';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
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
          <ModalsProvider>
            <Notifications limit={3} />
            <Routes />
          </ModalsProvider>
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  </StrictMode>,
);
