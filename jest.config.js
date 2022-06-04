'use strict';

const CI = !!process.env.CI;
const {getJestConfig} = require('@storybook/test-runner');

const storybookConfig = require('./.storybook/main');

process.env.STORYBOOK_CONFIG_DIR = './.storybook';
process.env.STORYBOOK_STORIES_PATTERN = storybookConfig.stories
  .flatMap((story) => (typeof story === 'string' ? [story] : story.files))
  .join(';');
process.env.TEST_BROWSERS = 'chromium';

/** @type {import('@jest/types').Config.GlobalConfig} */
module.exports = {
  projects: [{...getJestConfig(), displayName: 'Storybook Test Runner'}],
  reporters: [
    'default',
    CI && [
      'jest-junit',
      {
        addFileAttribute: 'true', // Yep, it really needs to be a string
        ancestorSeparator: ' › ',
        classNameTemplate: '{classname}',
        includeConsoleOutput: true,
        outputDirectory: 'reports/junit',
        suiteName: 'Unit Tests',
        titleTemplate: '{title}'
      }
    ]
  ].filter(Boolean)
};
