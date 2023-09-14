import { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
  stories: ['../app/**/*.stories.tsx', '../libs/design/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    'storybook-addon-apollo-client',
  ],
  framework: '@storybook/react-vite',
  docs: {
    autodocs: false,
  },
};
export default config;
