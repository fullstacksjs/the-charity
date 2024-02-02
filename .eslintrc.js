const { init } = require('@fullstacksjs/eslint-config/init');

module.exports = init({
  root: true,
  modules: {
    auto: true,
    esm: true,
    typescript: {
      parserProject: ['./tsconfig.eslint.json'],
      resolverProject: ['./tsconfig.json'],
    },
  },
  rules: {
    // NOTE: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md#known-issueslimitations
    'react/no-unused-prop-types': 'off',
    // NOTE: Lot of false positive in props
    'react/jsx-no-leaked-render': 'off',
    'no-console': 'error',
  },
  overrides: [
    {
      files: ['./cypress/**/*.ts'],
      rules: {
        'node/prefer-global/buffer': 'off',
      },
    },
  ],
});
