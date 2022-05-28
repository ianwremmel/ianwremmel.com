'use strict';

const {checkA11y, injectAxe} = require('axe-playwright');

/*
 * See https://storybook.js.org/docs/react/writing-tests/test-runner#test-hook-api-experimental
 * to learn more about the test-runner hooks API.
 */
module.exports = {
  async postRender(page) {
    await checkA11y(page, '#root', {
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
