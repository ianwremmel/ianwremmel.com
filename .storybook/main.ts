import type {StorybookConfig} from '@storybook/react-vite';

const config: StorybookConfig = {
  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials'],
  docs: {
    autodocs: true
  },
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  stories: ['../app/**/*.mdx', '../app/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  typescript: {
    // We check typescript elsewhere; this should speed up builds
    check: false
  }
};

export default config;
