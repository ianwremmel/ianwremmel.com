'use strict';

module.exports = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        controls: false
      }
    },
    '@storybook/addon-interactions'
  ],
  core: {
    builder: 'webpack5'
  },
  features: {
    interactionsDebugger: true
  },
  framework: '@storybook/react',
  stories: [
    {
      directory: '../app/components/atoms',
      files: '**/*.stories.*',
      titlePrefix: 'Atoms'
    },
    {
      directory: '../app/components/molecules',
      files: '**/*.stories.*',
      titlePrefix: 'Molecules'
    },
    {
      directory: '../app/components/organisms',
      files: '**/*.stories.*',
      titlePrefix: 'Organisms'
    },
    '../app/**/*.stories.mdx',
    '../app/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  typescript: {
    // We check typescript elsewhere; this should speed up builds
    check: false
  }
};
