import React from 'react';

import { MockedProvider } from '@apollo/client/testing';
import { ReactLocation, Router } from '@tanstack/react-location';
import { ThemeProvider } from '../src/design';
import { DecoratorFn, Parameters } from '@storybook/react';

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  apolloClient: {
    MockedProvider,
  },
};

export const decorators: DecoratorFn[] = [
  Story => (
    <Router routes={[]} location={new ReactLocation()}>
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    </Router>
  ),
];
