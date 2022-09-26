import React from 'react';

import { MockedProvider } from '@apollo/client/testing';
import { ReactLocation, Router } from '@tanstack/react-location';
import { initializeRTL } from 'storybook-addon-rtl';
import { ThemeProvider } from '../src/design';

initializeRTL();
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  direction: 'rtl',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  apolloClient: {
    MockedProvider,
  },
};

export const decorators = [
  Story => (
    <Router routes={[]} location={new ReactLocation()}>
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    </Router>
  ),
];
