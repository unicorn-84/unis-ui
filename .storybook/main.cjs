module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
      },
    },
  ],
  features: {
    postcss: false,
  },
  framework: '@storybook/react',
  core: {
    builder: 'webpack4',
  },
};
