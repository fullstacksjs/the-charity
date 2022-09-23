const tsconfigPaths = require('vite-tsconfig-paths').default;
const svgr = require('vite-plugin-svgr');

/** @type { import('StorybookConfig') } */
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-apollo-client',
    'storybook-addon-rtl',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config) {
    return {
      ...config,
      plugins: [...config.plugins, tsconfigPaths(), svgr()],
      envPrefix: 'APP',
    };
  },
};
