const { init } = require('@fullstacksjs/eslint-config/init');

module.exports = init({
  modules: {
    auto: true,
    esm: true,
    typescript: {
      parserProject: ['./tsconfig.eslint.json'],
      resolverProject: ['./tsconfig.json'],
    },
  },
  root: true,
  rules: {
    // NOTE: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md#known-issueslimitations
    'react/no-unused-prop-types': 'off',
  },
  overrides: [
    {
      files: ['./cypress/**/*.ts'],
      rules: {
        'node/prefer-global/buffer': 'off',
      },
    },
    {
      files: ['./**/*.stories.tsx', './**/*.cy.tsx'],
      rules: {
        '@typescript-eslint/no-confusing-void-expression': 'off',
        'react/jsx-no-useless-fragment': 'off',
        'react-hooks/rules-of-hooks': 'off',
      },
    },
  ],
});
