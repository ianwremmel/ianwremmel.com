import {TestRunnerConfig} from '@storybook/test-runner';
import {checkA11y, injectAxe} from 'axe-playwright';

/*
 * See https://storybook.js.org/docs/react/writing-tests/test-runner#test-hook-api-experimental
 * to learn more about the test-runner hooks API.
 */
const config: TestRunnerConfig = {
  async postRender(page) {
    await checkA11y(page, '#storybook-root', {
      axeOptions: {},
      detailedReport: true,
      detailedReportOptions: {
        html: true
      }
    });
  },
  async preRender(page) {
    await injectAxe(page);
  }
};

export default config;
