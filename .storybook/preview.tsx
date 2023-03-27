import { Notifications } from '@mantine/notifications';
import { Decorator, Parameters } from '@storybook/react';
import {
  createMemoryHistory,
  ReactLocation,
  Router
} from '@tanstack/react-location';
import React from 'react';
import { ThemeProvider } from '../libs/design';
import { apolloMocks } from './apolloMocks';

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  apolloClient: apolloMocks,
};

export const decorators: Decorator[] = [
  (Story, { args }) => {
    const router = args.router;
    const { layout, ...routes } = args.router ?? {};
    const Layout = layout ?? React.Fragment;
    const location = new ReactLocation({
      history: createMemoryHistory({ initialEntries: [router?.route ?? '/'] }),
    });

    return router ? (
      <Router routes={[routes]} location={location}>
        <Layout>
          <Story />
        </Layout>
      </Router>
    ) : (
      <Router routes={[]} location={location}>
        <Story />
      </Router>
    );
  },
  Story => (
    <ThemeProvider>
      <Notifications limit={3}/>
        <Story />
    </ThemeProvider>
  ),
];
