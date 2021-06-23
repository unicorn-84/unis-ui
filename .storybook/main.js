module.exports = {
  stories: ['../src/**/*.stor(y|ies).@(ts|tsx|js|jsx|md|mdx)'],
  addons: ['@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
      },
    },
  ],
  typescript: {
    check: true,
  },
};
