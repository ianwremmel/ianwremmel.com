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

  docs: {
    autodocs: true
  },

  features: {
    interactionsDebugger: true
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

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
