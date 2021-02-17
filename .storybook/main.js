module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx|md|mdx)'],
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
