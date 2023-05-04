import 'dayjs/locale/fa';
import '../libs/monkeyPatchZod';

import { AuthProvider } from '@camp/auth';
import { ApolloProvider } from '@camp/data-layer';
import { ThemeProvider } from '@camp/design';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { Routes } from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root')!);

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
