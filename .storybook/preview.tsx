import { MockedProvider } from '@apollo/client/testing';
import { initializeRTL } from 'storybook-addon-rtl';

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
