const tsconfigPaths = require('vite-tsconfig-paths').default;
const svgr = require('vite-plugin-svgr');

/** @type { import('@storybook/builder-vite').StorybookViteConfig } */
module.exports = {
  stories: ['../app/**/*.stories.tsx', '../libs/design/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-apollo-client',
  ],
  framework: '@storybook/react-vite',
};
